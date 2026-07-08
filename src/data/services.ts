// src/data/services.ts — Les metaux et prestations de La Centrale des Metaux
// Repris de l'arborescence actuelle du site (URLs conservees a l'identique).

export interface NavService {
  slug: string;
  label: string;
  href: string;
}

// Metaux non ferreux (sous-menu "Achat de metaux non ferreux")
export const METAUX_NON_FERREUX: NavService[] = [
  { slug: 'achat-et-recyclage-de-cuivre', label: 'Achat de Cuivre — Recyclage de Cuivre', href: '/achat-et-recyclage-de-cuivre/' },
  { slug: 'achat-dinox',                  label: "Achat d'Inox",                          href: '/achat-dinox/' },
  { slug: 'achat-de-zinc',                label: 'Achat de zinc',                         href: '/achat-de-zinc/' },
  { slug: 'achat-de-plomb',               label: 'Achat de plomb',                        href: '/achat-de-plomb/' },
  { slug: 'achat-daluminium',             label: "Achat d'aluminium",                     href: '/achat-daluminium/' },
  { slug: 'achat-de-laiton',              label: 'Achat de Laiton',                       href: '/achat-de-laiton/' },
];

// Services complementaires (sous-menu "Services")
export const SERVICES_COMPLEMENTAIRES: NavService[] = [
  { slug: 'location-benne-metaux',           label: 'Mise a disposition de bennes pour metaux', href: '/location-benne-metaux/' },
  { slug: 'achat-batterie-plomb-usagees',    label: 'Achat de Batteries Plomb',                  href: '/achat-batterie-plomb-usagees/' },
  { slug: 'recyclage-moteurs-electriques',   label: 'Recyclage moteurs electriques',             href: '/recyclage-moteurs-electriques/' },
];

// Pages piliers principales
// NB : "achat-de-metaux-non-ferreux" et "ferrailleur-93" ne sont pas des pages
// reelles sur le site en production (absentes du sitemap live) — elles ne sont
// donc pas listees ici. Le menu renvoie a la place vers les ancres /#metaux-non-ferreux
// et /#services de la page d'accueil (voir Nav.astro, Footer.astro).
export const PILIERS: NavService[] = [
  { slug: 'achat-de-metaux-ferreux',                       label: 'Achat de Metaux Ferreux',                href: '/achat-de-metaux-ferreux/' },
  { slug: 'recyclage-metaux',                              label: 'Recyclage de metaux',                    href: '/recyclage-metaux/' },
  { slug: 'recuperation-de-ferraille-et-achat-de-metaux',  label: 'Recuperation de ferraille et achat de metaux', href: '/recuperation-de-ferraille-et-achat-de-metaux/' },
  { slug: 'rachat-metaux',                                 label: 'Rachat de Metaux',                       href: '/rachat-metaux/' },
  { slug: 'information-sur-lachat-de-metaux',              label: "Reglementation sur l'achat de metaux",   href: '/information-sur-lachat-de-metaux/' },
];

// Prix indicatifs affiches sur la page d'accueil (source : site actuel, a rafraichir regulierement)
export interface PrixMetal {
  nom: string;
  prix: string;
  sousTitre: string;
}

export const PRIX_METAUX: PrixMetal[] = [
  { nom: 'Cuivre Millberry',    prix: '10,30 € / kg',            sousTitre: 'Fil de cuivre nu, dénudé' },
  { nom: 'Cuivre Mêlé',         prix: '9,30 € / kg',             sousTitre: 'Cuivre mêlé, non trié' },
  { nom: 'Laiton',              prix: '5,50 € / kg',             sousTitre: 'Alliage cuivre-zinc' },
  { nom: 'Plomb',               prix: '1,10 € / kg',             sousTitre: 'Gouttières, tuyauterie' },
  { nom: 'Zinc',                prix: '1,30 € / kg',             sousTitre: 'Tôles, bardages' },
  { nom: 'Batterie Automobile', prix: '0,40 € / kg',             sousTitre: 'Batteries plomb usagées' },
];
