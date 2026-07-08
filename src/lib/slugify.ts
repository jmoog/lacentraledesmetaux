/**
 * Transforme un titre en slug d'ancre stable et propre (gere les accents FR).
 * "Achat de cuivre a Aubervilliers" -> "achat-de-cuivre-a-aubervilliers"
 *
 * Utilise pour deriver les `id` des sections ET les `href` du sommaire a partir
 * de la MEME source : impossible d'avoir une ancre cassee entre le sommaire et
 * la section qu'elle cible. Condition necessaire pour les sitelinks "pills"
 * Google (voir docs/astro-sitelink-pills.md).
 */
export const slugify = (input: string): string =>
  input
    .toLowerCase()
    .normalize('NFD')                  // decompose les caracteres accentues
    .replace(/\p{Diacritic}/gu, '')    // retire les diacritiques (e accent -> e)
    .replace(/[^a-z0-9]+/g, '-')       // tout le reste -> tiret
    .replace(/(^-|-$)/g, '');          // pas de tiret en debut/fin
