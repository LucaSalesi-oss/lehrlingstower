"use client";

import { useEffect, useRef, useState } from "react";
import type { GeoJSONSource, Map as MapLibreMap, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Lang } from "../i18n/LanguageContext";
import { nearestRegion, type Region } from "./regions";

const STYLE_URL =
  "https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json";
const TERRAIN_TILES =
  "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png";
const TERRAIN_ATTRIBUTION = "Terrain: Mapzen Terrain Tiles (EU-DEM, USGS)";

// Centres sit south of Switzerland's middle because the pitched camera compresses the north
const DESKTOP_VIEW = { center: [8.25, 46.6] as [number, number], bearing: -8, pitch: 50 };
const MOBILE_VIEW = { center: [8.23, 46.7] as [number, number], bearing: -4, pitch: 35 };
const REGION_RADIUS_KM = 30;

// Zoom at which ~4.9° of longitude (Switzerland plus margin) fills the width
const zoomFor = (width: number) => Math.log2((width * 360) / (512 * 4.9));

type RegionData = Parameters<GeoJSONSource["setData"]>[0];

function regionData(center: [number, number] | null): RegionData {
  if (!center) return { type: "FeatureCollection", features: [] };
  const [lng, lat] = center;
  const d = REGION_RADIUS_KM / 6371;
  const ring: [number, number][] = [];
  for (let i = 0; i <= 64; i++) {
    const a = (i / 64) * 2 * Math.PI;
    ring.push([
      lng + ((d * Math.sin(a)) / Math.cos((lat * Math.PI) / 180)) * (180 / Math.PI),
      lat + d * Math.cos(a) * (180 / Math.PI),
    ]);
  }
  return {
    type: "FeatureCollection",
    features: [
      { type: "Feature", properties: {}, geometry: { type: "Polygon", coordinates: [ring] } },
      { type: "Feature", properties: {}, geometry: { type: "Point", coordinates: center } },
    ],
  };
}

type Props = {
  lang: Lang;
  pillTemplate: string;
  onSelectRegion: (region: Region) => void;
};

const pillText = (props: Props, region: Region) =>
  props.pillTemplate.replace("{region}", region[props.lang]);

export default function SwissMap3D(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef(props);
  const pillRef = useRef<HTMLDivElement | null>(null);
  const hoveredRef = useRef<Region | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    propsRef.current = props;
    if (pillRef.current && hoveredRef.current) {
      pillRef.current.textContent = pillText(props, hoveredRef.current);
    }
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let map: MapLibreMap | undefined;
    let pill: Marker | undefined;
    let disposed = false;
    let frame = 0;
    let pointer: [number, number] | null = null;
    let regionCenter: [number, number] | null = null;
    const view = container.clientWidth < 640 ? MOBILE_VIEW : DESKTOP_VIEW;
    const base = { bearing: view.bearing, pitch: view.pitch };
    const target = { ...base };
    const current = { ...base };

    // Map coordinate under a screen point, or null outside Switzerland
    const swissPoint = (point: [number, number]): [number, number] | null => {
      if (!map?.getLayer("ch-mask")) return null;
      if (map.queryRenderedFeatures(point, { layers: ["ch-mask"] }).length) return null;
      const { lng, lat } = map.unproject(point);
      return [lng, lat];
    };

    const updateRegion = () => {
      const source = map?.getSource<GeoJSONSource>("region");
      if (!map || !source) return;
      const next = pointer ? swissPoint(pointer) : null;
      container.style.cursor = next ? "pointer" : "";
      if (!next && !regionCenter) return;
      if (
        next &&
        regionCenter &&
        Math.abs(next[0] - regionCenter[0]) + Math.abs(next[1] - regionCenter[1]) < 0.0005
      )
        return;
      regionCenter = next;
      source.setData(regionData(next));
      if (!next) {
        hoveredRef.current = null;
        pill?.remove();
        return;
      }
      const region = nearestRegion(next[0], next[1]);
      if (region !== hoveredRef.current && pillRef.current) {
        hoveredRef.current = region;
        pillRef.current.textContent = pillText(propsRef.current, region);
      }
      pill?.setLngLat(next).addTo(map);
    };

    const step = () => {
      current.bearing += (target.bearing - current.bearing) * 0.07;
      current.pitch += (target.pitch - current.pitch) * 0.07;
      map?.jumpTo(current);
      updateRegion();
      const moving =
        Math.abs(target.bearing - current.bearing) > 0.01 ||
        Math.abs(target.pitch - current.pitch) > 0.01;
      frame = moving ? requestAnimationFrame(step) : 0;
    };
    const animate = () => {
      if (!frame) frame = requestAnimationFrame(step);
    };
    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      pointer = [e.clientX - r.left, e.clientY - r.top];
      target.bearing = base.bearing - ((pointer[0] / r.width) * 2 - 1) * 10;
      target.pitch = base.pitch + ((pointer[1] / r.height) * 2 - 1) * 7;
      animate();
    };
    const onLeave = () => {
      pointer = null;
      Object.assign(target, base);
      animate();
    };
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".maplibregl-ctrl")) return;
      onMove(e);
      const point = pointer && swissPoint(pointer);
      if (point) propsRef.current.onSelectRegion(nearestRegion(point[0], point[1]));
    };
    const onResize = () => map?.setZoom(zoomFor(container.clientWidth));

    const init = async () => {
      const maplibre = await import("maplibre-gl");
      if (disposed) return;
      maplibre.setWorkerUrl(
        new URL("maplibre-gl/dist/maplibre-gl-worker.mjs", import.meta.url).href
      );

      const m = new maplibre.Map({
        container,
        style: STYLE_URL,
        ...view,
        zoom: zoomFor(container.clientWidth),
        interactive: false,
        attributionControl: { compact: true },
        pixelRatio: Math.min(window.devicePixelRatio, 2),
      });
      map = m;

      const pillEl = document.createElement("div");
      pillEl.className =
        "pointer-events-none whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-md ring-1 ring-primary/20";
      pillRef.current = pillEl;
      pill = new maplibre.Marker({ element: pillEl, anchor: "bottom", offset: [0, -10] });

      m.on("load", () => {
        const dem = {
          type: "raster-dem" as const,
          tiles: [TERRAIN_TILES],
          encoding: "terrarium" as const,
          tileSize: 256,
          maxzoom: 12,
        };
        m.addSource("terrain", { ...dem, attribution: TERRAIN_ATTRIBUTION });
        m.addSource("hillshade", dem);
        m.addLayer(
          {
            id: "dem-hillshade",
            type: "hillshade",
            source: "hillshade",
            paint: {
              "hillshade-exaggeration": 0.55,
              "hillshade-shadow-color": "#134e4a",
              "hillshade-highlight-color": "#ffffff",
              "hillshade-accent-color": "#0f766e",
            },
          },
          "water"
        );
        m.setTerrain({ source: "terrain", exaggeration: 2.2 });
        m.setLayoutProperty("place_country", "visibility", "none");

        const firstLabelLayer = m.getStyle().layers.find((l) => l.type === "symbol")?.id;
        const polygon: ["==", ["geometry-type"], "Polygon"] = ["==", ["geometry-type"], "Polygon"];

        m.addSource("switzerland", { type: "geojson", data: "/geo/switzerland.geojson" });
        m.addLayer(
          {
            id: "ch-mask",
            type: "fill",
            source: "switzerland",
            filter: ["==", ["get", "kind"], "mask"],
            paint: { "fill-color": "#ffffff", "fill-opacity": 0.85 },
          },
          firstLabelLayer
        );
        m.addLayer(
          {
            id: "ch-glow",
            type: "line",
            source: "switzerland",
            filter: ["==", ["get", "kind"], "border"],
            paint: {
              "line-color": "#14b8a6",
              "line-width": 12,
              "line-blur": 10,
              "line-opacity": 0.35,
            },
          },
          firstLabelLayer
        );
        m.addLayer(
          {
            id: "ch-border",
            type: "line",
            source: "switzerland",
            filter: ["==", ["get", "kind"], "border"],
            paint: { "line-color": "#0d9488", "line-width": 2 },
          },
          firstLabelLayer
        );

        m.addSource("region", { type: "geojson", data: regionData(null) });
        m.addLayer(
          {
            id: "region-fill",
            type: "fill",
            source: "region",
            filter: polygon,
            paint: { "fill-color": "#14b8a6", "fill-opacity": 0.22 },
          },
          firstLabelLayer
        );
        m.addLayer(
          {
            id: "region-glow",
            type: "line",
            source: "region",
            filter: polygon,
            paint: {
              "line-color": "#14b8a6",
              "line-width": 10,
              "line-blur": 8,
              "line-opacity": 0.5,
            },
          },
          firstLabelLayer
        );
        m.addLayer(
          {
            id: "region-outline",
            type: "line",
            source: "region",
            filter: polygon,
            paint: { "line-color": "#0d9488", "line-width": 2 },
          },
          firstLabelLayer
        );
        m.addLayer(
          {
            id: "region-center",
            type: "circle",
            source: "region",
            filter: ["==", ["geometry-type"], "Point"],
            paint: {
              "circle-radius": 5,
              "circle-color": "#0d9488",
              "circle-stroke-color": "#ffffff",
              "circle-stroke-width": 2,
            },
          },
          firstLabelLayer
        );

        m.once("idle", () => setReady(true));
      });

      container.addEventListener("mousemove", onMove);
      container.addEventListener("click", onClick);
      container.addEventListener("mouseleave", onLeave);
      window.addEventListener("resize", onResize);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          init();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(container);

    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("click", onClick);
      container.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      map?.remove();
      pillRef.current = null;
      hoveredRef.current = null;
    };
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}>
      <div ref={containerRef} className="swiss-map h-[270px] w-full sm:h-[460px] lg:h-[540px]" />
    </div>
  );
}
