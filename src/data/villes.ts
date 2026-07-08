// src/data/villes.ts — Pages "Ferrailleur a [ville]" (Seine-Saint-Denis + Paris)
// Liste reprise du plan du site actuel (la-centrale-des-metaux.fr/plan-du-site/).
// URLs canonicalisees (a plat, sans doublons WP) : /ferrailleur-a-{slug}/
//
// Chaque ville porte ses coordonnees (lat/lng, centroide approx.) pour permettre
// le maillage interne geographique : getVoisines() calcule les communes les plus
// proches (93 + Paris confondus) par distance a vol d'oiseau.

export interface Ville {
  slug: string;
  nom: string;
  lat: number;
  lng: number;
}

export const VILLES_93: Ville[] = [
  { slug: 'aubervilliers',        nom: 'Aubervilliers',          lat: 48.9146, lng: 2.3823 },
  { slug: 'aulnay-sous-bois',     nom: 'Aulnay-sous-Bois',       lat: 48.9386, lng: 2.4936 },
  { slug: 'bagnolet',             nom: 'Bagnolet',               lat: 48.8656, lng: 2.4186 },
  { slug: 'bobigny',              nom: 'Bobigny',                lat: 48.9106, lng: 2.4396 },
  { slug: 'bondy',                nom: 'Bondy',                  lat: 48.9024, lng: 2.4836 },
  { slug: 'clichy-sous-bois',     nom: 'Clichy-sous-Bois',       lat: 48.9100, lng: 2.5500 },
  { slug: 'coubron',              nom: 'Coubron',                lat: 48.9231, lng: 2.5931 },
  { slug: 'drancy',               nom: 'Drancy',                 lat: 48.9250, lng: 2.4453 },
  { slug: 'dugny',                nom: 'Dugny',                  lat: 48.9536, lng: 2.4189 },
  { slug: 'epinay-sur-seine',     nom: 'Épinay-sur-Seine',       lat: 48.9553, lng: 2.3092 },
  { slug: 'gagny',                nom: 'Gagny',                  lat: 48.8811, lng: 2.5386 },
  { slug: 'gournay-sur-marne',    nom: 'Gournay-sur-Marne',      lat: 48.8611, lng: 2.5711 },
  { slug: 'lile-saint-denis',     nom: "L'Île-Saint-Denis",      lat: 48.9364, lng: 2.3286 },
  { slug: 'la-courneuve',         nom: 'La Courneuve',           lat: 48.9236, lng: 2.3975 },
  { slug: 'livry-gargan',         nom: 'Livry-Gargan',           lat: 48.9192, lng: 2.5372 },
  { slug: 'montfermeil',          nom: 'Montfermeil',            lat: 48.8981, lng: 2.5711 },
  { slug: 'montreuil',            nom: 'Montreuil',              lat: 48.8617, lng: 2.4436 },
  { slug: 'neuilly-plaisance',    nom: 'Neuilly-Plaisance',      lat: 48.8619, lng: 2.5064 },
  { slug: 'neuilly-sur-marne',    nom: 'Neuilly-sur-Marne',      lat: 48.8536, lng: 2.5347 },
  { slug: 'noisy-le-grand',       nom: 'Noisy-le-Grand',         lat: 48.8486, lng: 2.5528 },
  { slug: 'noisy-le-sec',         nom: 'Noisy-le-Sec',           lat: 48.8903, lng: 2.4586 },
  { slug: 'pantin',               nom: 'Pantin',                 lat: 48.8967, lng: 2.4089 },
  { slug: 'pierrefitte-sur-seine',nom: 'Pierrefitte-sur-Seine',  lat: 48.9639, lng: 2.3628 },
  { slug: 'romainville',          nom: 'Romainville',            lat: 48.8853, lng: 2.4361 },
  { slug: 'rosny-sous-bois',      nom: 'Rosny-sous-Bois',        lat: 48.8714, lng: 2.4864 },
  { slug: 'saint-ouen',           nom: 'Saint-Ouen',             lat: 48.9111, lng: 2.3339 },
  { slug: 'sevran',               nom: 'Sevran',                 lat: 48.9403, lng: 2.5275 },
  { slug: 'stains',               nom: 'Stains',                 lat: 48.9503, lng: 2.3833 },
  { slug: 'tremblay-en-france',   nom: 'Tremblay-en-France',     lat: 48.9950, lng: 2.5700 },
  { slug: 'vaujours',             nom: 'Vaujours',               lat: 48.9308, lng: 2.5747 },
  { slug: 'villemomble',          nom: 'Villemomble',            lat: 48.8836, lng: 2.5089 },
  { slug: 'villepinte',           nom: 'Villepinte',             lat: 48.9569, lng: 2.5372 },
  { slug: 'villetaneuse',         nom: 'Villetaneuse',           lat: 48.9575, lng: 2.3453 },
  { slug: 'blanc-mesnil',         nom: 'Le Blanc-Mesnil',        lat: 48.9394, lng: 2.4636 },
  { slug: 'bourget',              nom: 'Le Bourget',             lat: 48.9350, lng: 2.4253 },
  { slug: 'pre-saint-gervais',    nom: 'Le Pré-Saint-Gervais',   lat: 48.8853, lng: 2.3986 },
  { slug: 'raincy',               nom: 'Le Raincy',              lat: 48.8967, lng: 2.5236 },
  { slug: 'lilas',                nom: 'Les Lilas',              lat: 48.8797, lng: 2.4222 },
  { slug: 'pavillons-sous-bois',  nom: 'Les Pavillons-sous-Bois',lat: 48.9081, lng: 2.5039 },
];

// Arrondissements de Paris — slug canonicalise : /ferrailleur-a-paris-XX/
const PARIS_COORDS: Record<number, [number, number]> = {
  1: [48.8607, 2.3358],  2: [48.8686, 2.3417],  3: [48.8630, 2.3600],  4: [48.8544, 2.3573],
  5: [48.8448, 2.3500],  6: [48.8490, 2.3330],  7: [48.8560, 2.3120],  8: [48.8726, 2.3120],
  9: [48.8770, 2.3390], 10: [48.8760, 2.3600], 11: [48.8590, 2.3790], 12: [48.8350, 2.4210],
 13: [48.8322, 2.3560], 14: [48.8300, 2.3260], 15: [48.8420, 2.2990], 16: [48.8600, 2.2620],
 17: [48.8870, 2.3070], 18: [48.8927, 2.3444], 19: [48.8870, 2.3820], 20: [48.8640, 2.3980],
};

export const ARRONDISSEMENTS_PARIS: Ville[] = Array.from({ length: 20 }, (_, i) => {
  const n = i + 1;
  const num = String(n).padStart(2, '0');
  const [lat, lng] = PARIS_COORDS[n];
  return { slug: `paris-${num}`, nom: `Paris ${num}`, lat, lng };
});

// Toutes les zones desservies (communes 93 + arrondissements Paris), pour le maillage.
export const TOUTES_VILLES: Ville[] = [...VILLES_93, ...ARRONDISSEMENTS_PARIS];

// Distance a vol d'oiseau (km) entre deux villes — formule de haversine.
function distanceKm(a: Ville, b: Ville): number {
  const R = 6371;
  const toRad = (x: number) => (x * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/**
 * Renvoie les `n` villes desservies les plus proches d'une ville donnee
 * (communes du 93 et arrondissements de Paris confondus), triees par proximite.
 * Sert au maillage interne geographique entre pages ville.
 */
export function getVoisines(slug: string, n = 7): Ville[] {
  const ref = TOUTES_VILLES.find((v) => v.slug === slug);
  if (!ref) return [];
  return TOUTES_VILLES
    .filter((v) => v.slug !== slug)
    .map((v) => ({ ville: v, d: distanceKm(ref, v) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, n)
    .map((x) => x.ville);
}
