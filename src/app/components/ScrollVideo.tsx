"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";

export default function ScrollVideo({
  children,
  scrollContent,
}: {
  children: ReactNode;
  scrollContent?: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const updateVideo = useCallback(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const videoWrap = videoWrapRef.current;
    const scrollEl = scrollContentRef.current;
    const img = imgRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrolled = -rect.top;
    const totalScroll = containerHeight - windowHeight;
    const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

    // Desktop: scrub video
    if (video && videoWrap && video.duration) {
      try { video.currentTime = progress * video.duration; } catch (_) {}
      const blurProgress = Math.max(0, (progress - 0.7) / 0.3);
      videoWrap.style.filter = blurProgress > 0 ? `blur(${blurProgress * 4}px)` : "none";
    }

    // Mobile: parallax on image
    if (img) {
      img.style.transform = `translateY(${progress * 60}px)`;
    }

    if (scrollEl) {
      const show = progress > 0.1;
      scrollEl.style.opacity = show ? "1" : "0";
      scrollEl.style.transform = show ? "translateY(0)" : "translateY(20px)";
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const onLoaded = () => { video.pause(); video.currentTime = 0; };
      video.addEventListener("loadedmetadata", onLoaded);
      video.load();
    }

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateVideo);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateVideo]);

  return (
    <div ref={containerRef} className="relative h-[300vh] md:h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Desktop: scroll-driven video */}
        <div ref={videoWrapRef} className="hidden md:block absolute inset-0">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-scroll-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Mobile: autoplay video */}
        <div className="md:hidden absolute inset-0">
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-scroll-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {children}
          {scrollContent && (
            <div
              ref={scrollContentRef}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
              }}
            >
              {scrollContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
