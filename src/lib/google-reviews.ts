// src/lib/google-reviews.ts
// Recuperation des avis Google Business Profile (note, total, derniers avis)
// pour le site Astro (output: 'static'). Reprend la meme logique que le plugin
// WordPress "MOOG Digital Factory Avis Plugin" : appel a l'API Google Places
// Details, filtre sur une note minimum, tri par date desc, cache pour eviter
// de spammer l'API. La difference : ici le fetch se fait au moment du build
// (le site est statique), donc les avis se rafraichissent a chaque nouveau
// build/deploiement — pas en temps reel cote navigateur.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  time: number;
}

export interface GoogleReviewsData {
  rating: number;
  total: number;
  reviews: GoogleReview[];
}

const CACHE_DIR = path.resolve('.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'google-reviews.json');
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24h — meme duree que le transient WordPress

function readCache(): GoogleReviewsData | null {
  try {
    if (!existsSync(CACHE_FILE)) return null;
    const parsed = JSON.parse(readFileSync(CACHE_FILE, 'utf8'));
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null;
    return parsed.data as GoogleReviewsData;
  } catch {
    return null;
  }
}

function writeCache(data: GoogleReviewsData) {
  try {
    if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(CACHE_FILE, JSON.stringify({ data, fetchedAt: Date.now() }), 'utf8');
  } catch {
    // le cache est un confort (evite des appels API repetes en dev), pas une obligation
  }
}

/**
 * Recupere les avis Google Business Profile pour un Place ID donne.
 * Retourne `null` si la cle API ou le Place ID sont absents, ou si l'appel echoue —
 * charge alors a l'appelant de prevoir un contenu de repli (fallback).
 */
export async function fetchGoogleReviews(placeId: string, minRating = 4): Promise<GoogleReviewsData | null> {
  const cached = readCache();
  if (cached) return cached;

  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !placeId) return null;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${encodeURIComponent(placeId)}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}&language=fr`;
    const response = await fetch(url);
    const json: any = await response.json();

    if (json.error_message || !json.result) {
      console.warn('[google-reviews] Erreur API Google Places :', json.error_message || 'reponse invalide');
      return null;
    }

    const result = json.result;
    const reviews: GoogleReview[] = (result.reviews || [])
      .filter((r: any) => r.rating >= minRating)
      .sort((a: any, b: any) => b.time - a.time)
      .map((r: any) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
        time: r.time,
      }));

    const data: GoogleReviewsData = {
      rating: result.rating ?? 0,
      total: result.user_ratings_total ?? 0,
      reviews,
    };

    writeCache(data);
    return data;
  } catch (err) {
    console.warn('[google-reviews] Echec de la recuperation des avis Google :', err);
    return null;
  }
}
