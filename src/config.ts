// src/config.ts — Configuration globale La Centrale des Metaux (Ferrailleur 93)
// Donnees NAP reprises telles quelles du site actuel (la-centrale-des-metaux.fr)

import { fetchGoogleReviews } from './lib/google-reviews';

const SITE_BASE = {
  nom: 'La Centrale des Métaux',
  nomComplet: 'La Centrale des Métaux — Ferrailleur 93',
  logoTexte: '/assets/img/logo/logo-la-centrale-des-metaux.png',
  logoIcone: '/assets/img/logo/logo-la-centrale-des-metaux-icone.png',
  responsable: 'Marc CHAINAY',
  tel: '06 61 86 39 05',
  telHref: 'tel:+33661863905',
  email: 'lacentraledesmetaux@gmail.com',
  adresse: '135 Route de Saint Leu, 93800 Epinay-sur-Seine',
  rue: '135 Route de Saint Leu',
  ville: 'Epinay-sur-Seine',
  cp: '93800',
  departement: 'Seine-Saint-Denis',
  numeroDepartement: '93',
  region: 'Ile-de-France',
  siret: '881 778 591 R.C.S. BOBIGNY',
  url: 'https://la-centrale-des-metaux.fr',
  seoTitle: 'Ferrailleur 93 — Achat de métaux — La Centrale des Métaux',
  seoDesc: 'Achat et recyclage de métaux ferreux et non ferreux en Seine-Saint-Denis : cuivre, plomb, laiton, zinc, batteries et moteurs électriques. Devis gratuit.',
  horaires: [
    { jour: 'Lundi',    h: '08:00–12:00 / 14:00–18:00' },
    { jour: 'Mardi',    h: '08:00–12:00 / 14:00–18:00' },
    { jour: 'Mercredi', h: '08:00–12:00 / 14:00–18:00' },
    { jour: 'Jeudi',    h: '08:00–12:00 / 14:00–18:00' },
    { jour: 'Vendredi', h: '08:00–12:00 / 14:00–18:00' },
    { jour: 'Samedi',   h: '08:00–13:30' },
    { jour: 'Dimanche', h: 'Fermé' },
  ],
  lat: 48.9532555,
  lng: 2.3363178,
  wazeUrl: 'https://ul.waze.com/ul?place=ChIJpy6iwiJp5kcRIvrJGMqOcjI&ll=48.95325550%2C2.33631780&navigate=yes',
  mapsUrl: 'https://maps.app.goo.gl/Up1aH9F4RzbUtHro6',
  placeId: 'ChIJpy6iwiJp5kcRIvrJGMqOcjI',
  googleRating: '4,8',
  googleReviewsCount: 130,
  ga4: '', // a renseigner
};

// Recuperation des avis Google au moment du build (voir src/lib/google-reviews.ts).
// Si GOOGLE_PLACES_API_KEY est absent ou l'appel echoue, on retombe sur les valeurs
// statiques ci-dessus (googleRating / googleReviewsCount) — le site reste buildable
// meme sans cle API configuree.
const googleData = await fetchGoogleReviews(SITE_BASE.placeId);

const SITE = {
  ...SITE_BASE,
  googleRating: googleData ? googleData.rating.toFixed(1).replace('.', ',') : SITE_BASE.googleRating,
  googleReviewsCount: googleData ? googleData.total : SITE_BASE.googleReviewsCount,
  // null si pas de donnees live -> les pages utilisent alors leur propre contenu de repli
  googleReviews: googleData?.reviews ?? null,
};

export default SITE;
