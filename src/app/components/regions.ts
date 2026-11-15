export type Region = { de: string; fr: string; it: string; lng: number; lat: number };

const same = (name: string, lng: number, lat: number): Region => ({ de: name, fr: name, it: name, lng, lat });

export const REGIONS: Region[] = [
  { de: "Zürich", fr: "Zurich", it: "Zurigo", lng: 8.5417, lat: 47.3769 },
  same("Winterthur", 8.7241, 47.4999),
  same("Uster", 8.7206, 47.3471),
  { de: "Bern", fr: "Berne", it: "Berna", lng: 7.4474, lat: 46.948 },
  { de: "Biel/Bienne", fr: "Bienne", it: "Bienne", lng: 7.2441, lat: 47.1368 },
  { de: "Thun", fr: "Thoune", it: "Thun", lng: 7.628, lat: 46.758 },
  { de: "Burgdorf", fr: "Berthoud", it: "Burgdorf", lng: 7.6276, lat: 47.0563 },
  same("Langenthal", 7.7896, 47.2153),
  same("Langnau im Emmental", 7.7856, 46.9396),
  same("Interlaken", 7.8632, 46.6863),
  same("Frutigen", 7.6472, 46.5878),
  { de: "Basel", fr: "Bâle", it: "Basilea", lng: 7.5886, lat: 47.5596 },
  same("Liestal", 7.7344, 47.4846),
  { de: "Luzern", fr: "Lucerne", it: "Lucerna", lng: 8.3093, lat: 47.0502 },
  { de: "Zug", fr: "Zoug", it: "Zugo", lng: 8.5157, lat: 47.1662 },
  { de: "Schwyz", fr: "Schwytz", it: "Svitto", lng: 8.6532, lat: 47.0207 },
  same("Altdorf", 8.6439, 46.8805),
  same("Sarnen", 8.2453, 46.8961),
  same("Stans", 8.3656, 46.9577),
  { de: "Glarus", fr: "Glaris", it: "Glarona", lng: 9.0679, lat: 47.0404 },
  { de: "St. Gallen", fr: "Saint-Gall", it: "San Gallo", lng: 9.3767, lat: 47.4245 },
  same("Wil", 9.0467, 47.4615),
  same("Rapperswil-Jona", 8.8188, 47.2266),
  same("Herisau", 9.2792, 47.3858),
  same("Appenzell", 9.4096, 47.3304),
  same("Frauenfeld", 8.8988, 47.5536),
  same("Kreuzlingen", 9.1751, 47.6506),
  { de: "Schaffhausen", fr: "Schaffhouse", it: "Sciaffusa", lng: 8.6349, lat: 47.6973 },
  same("Aarau", 8.0444, 47.3925),
  same("Baden", 8.3064, 47.4733),
  same("Olten", 7.9078, 47.35),
  { de: "Solothurn", fr: "Soleure", it: "Soletta", lng: 7.5378, lat: 47.2088 },
  { de: "Chur", fr: "Coire", it: "Coira", lng: 9.532, lat: 46.8508 },
  same("Davos", 9.837, 46.8027),
  same("St. Moritz", 9.8385, 46.4983),
  same("Scuol", 10.2986, 46.7964),
  same("Ilanz", 9.2048, 46.7737),
  same("Lausanne", 6.6323, 46.5197),
  same("Montreux", 6.9106, 46.4312),
  same("Yverdon-les-Bains", 6.6412, 46.7785),
  same("Nyon", 6.2396, 46.3833),
  { de: "Genf", fr: "Genève", it: "Ginevra", lng: 6.1432, lat: 46.2044 },
  { de: "Fribourg", fr: "Fribourg", it: "Friburgo", lng: 7.162, lat: 46.8065 },
  same("Bulle", 7.0573, 46.6193),
  same("Neuchâtel", 6.9293, 46.99),
  same("La Chaux-de-Fonds", 6.8328, 47.1035),
  same("Delémont", 7.3426, 47.3649),
  same("Porrentruy", 7.0756, 47.4153),
  same("Sion", 7.3606, 46.2331),
  same("Sierre", 7.5352, 46.2919),
  same("Martigny", 7.0715, 46.1027),
  same("Monthey", 6.9539, 46.255),
  { de: "Visp", fr: "Viège", it: "Visp", lng: 7.8828, lat: 46.2937 },
  { de: "Brig", fr: "Brigue", it: "Briga", lng: 7.9878, lat: 46.3159 },
  same("Lugano", 8.9511, 46.0037),
  same("Bellinzona", 9.0244, 46.1946),
  same("Locarno", 8.7957, 46.1709),
  same("Mendrisio", 8.9862, 45.8702),
  same("Biasca", 8.9707, 46.3594),
];

// Equirectangular distance is accurate enough at Switzerland's scale
const COS_LAT = Math.cos((46.8 * Math.PI) / 180);

export function nearestRegion(lng: number, lat: number): Region {
  let best = REGIONS[0];
  let bestDist = Infinity;
  for (const r of REGIONS) {
    const dist = ((r.lng - lng) * COS_LAT) ** 2 + (r.lat - lat) ** 2;
    if (dist < bestDist) {
      bestDist = dist;
      best = r;
    }
  }
  return best;
}
