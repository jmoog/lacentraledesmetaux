# Obtenir les "pills" de sitelinks Google sur un projet Astro

> Guide d'implémentation reproductible. Objectif : maximiser les chances que Google
> affiche des **liens de saut (jump-to / scroll-to sitelinks)** sous ton résultat,
> comme les pills « Besoin d'un Couvreur à… », « Le nettoyage de toiture à… », etc.
>
> Principe : Google fabrique ces pills à partir de tes **titres de section**, à condition
> que la page ait une structure claire et des **ancres réelles servies côté serveur**
> (pas générées en JavaScript). Astro (SSG/SSR) est idéal pour ça.

---

## TL;DR — les 5 conditions

1. Chaque titre de section (`h2`/`h3`) porte un **`id` stable et propre** dans le HTML brut.
2. Un **sommaire** avec de vrais liens `<a href="#ancre">` est rendu **côté serveur**.
3. Les titres sont **courts (~40-50 caractères), distincts et autonomes**, idéalement couple *service + ville*.
4. Le contenu ciblé est **immédiatement visible** (pas dans un accordéon replié) et le **fragment `#ancre` est préservé** (pas de smooth-scroll JS qui le casse).
5. La page **performe déjà** sur la requête (bon positionnement + maillage interne solide).

> ⚠️ Ces pills sont **100 % algorithmiques**. On ne les force pas : on maximise les chances
> et on influence *lesquelles* Google retient. Compter plusieurs semaines de re-crawl.

---

## 1. Utilitaire de slug (accents FR gérés)

`src/lib/slugify.ts`

```ts
/**
 * Transforme un titre en slug d'ancre stable et propre.
 * "Nettoyage de toiture à Cernay-la-Ville" -> "nettoyage-de-toiture-a-cernay-la-ville"
 */
export const slugify = (input: string): string =>
  input
    .toLowerCase()
    .normalize('NFD')                    // décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, '')     // retire les diacritiques (é -> e)
    .replace(/[^a-z0-9]+/g, '-')         // tout le reste -> tiret
    .replace(/(^-|-$)/g, '');            // pas de tiret en début/fin
```

---

## 2. Le composant sommaire (réutilisable)

Contrat unique et simple : le composant reçoit une liste de headings au format
`{ depth, slug, text }`. Peu importe que la page soit en Markdown ou en `.astro`
data-driven — c'est la page qui produit ce tableau.

`src/components/TableOfContents.astro`

```astro
---
export interface Heading {
  depth: number;   // 2 pour h2, 3 pour h3...
  slug: string;    // l'id de l'ancre, SANS le #
  text: string;    // le libellé affiché
}

interface Props {
  headings: Heading[];
  title?: string;
  minDepth?: number; // par défaut 2
  maxDepth?: number; // par défaut 3
}

const {
  headings,
  title = 'Dans cette page',
  minDepth = 2,
  maxDepth = 3,
} = Astro.props;

const items = headings.filter((h) => h.depth >= minDepth && h.depth <= maxDepth);
---

{items.length > 0 && (
  <nav class="toc" aria-label={title}>
    <p class="toc__title">{title}</p>
    <ul class="toc__list">
      {items.map((h) => (
        <li class={`toc__item toc__item--h${h.depth}`}>
          <a href={`#${h.slug}`}>{h.text}</a>
        </li>
      ))}
    </ul>
  </nav>
)}

<style>
  .toc {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1rem 1.25rem;
    margin: 0 0 2rem;
    background: #fafafa;
  }
  .toc__title {
    margin: 0 0 0.5rem;
    font-weight: 700;
    font-size: 0.95rem;
  }
  .toc__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .toc__item--h3 { padding-left: 1rem; }
  .toc a {
    text-decoration: none;
    color: #1a56db;
  }
  .toc a:hover { text-decoration: underline; }
  /* décale la cible sous un header sticky éventuel */
  :global(:target) { scroll-margin-top: 90px; }
</style>
```

---

## 3. Intégration — Cas A : contenu en Markdown / Content Collections

Astro génère déjà des `id` sur tes headings, mais ajoute `rehype-slug` pour des
slugs propres et stables même si tu changes le texte plus tard.

```bash
npm i rehype-slug
```

`astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
});
```

Dans la page qui rend l'entrée :

```astro
---
import { getEntry } from 'astro:content';
import TableOfContents from '../components/TableOfContents.astro';

const entry = await getEntry('villes', Astro.params.slug);
const { Content, headings } = await entry.render();
// headings est déjà au format { depth, slug, text } attendu par le composant
---

<article>
  <h1>{entry.data.h1}</h1>

  <TableOfContents headings={headings} minDepth={2} maxDepth={3} />

  <Content />
</article>
```

> `render()` renvoie `headings` avec exactement la forme `{ depth, slug, text }`.
> Rien à transformer.

---

## 4. Intégration — Cas B : page `.astro` data-driven (template service + ville)

Le cas le plus fréquent pour des pages « service + commune » générées en masse.
Ici, **on ne rédige pas du HTML libre** : on modélise le contenu en **tableau de
sections**. C'est ce qui donne le contrôle total sur les ancres ET sur les futures pills.

`src/pages/couvreur/[ville].astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import TableOfContents from '../../components/TableOfContents.astro';
import { slugify } from '../../lib/slugify';

export async function getStaticPaths() {
  // ... tes communes (depuis un JSON, une collection, PostgreSQL, etc.)
  return villes.map((v) => ({ params: { ville: v.slug }, props: { ville: v } }));
}

const { ville } = Astro.props;
const nom = ville.nom; // ex. "Cernay-la-Ville"

// 1 section = 1 sous-intention autonome. Titres COURTS + couple service+ville.
const rawSections = [
  {
    title: `Nettoyage de toiture à ${nom}`,
    html: `<p>...</p>`,
  },
  {
    title: `Démoussage de toiture à ${nom}`,
    html: `<p>...</p>`,
  },
  {
    title: `Traitements de toiture à ${nom}`,
    html: `<p>...</p>`,
  },
  {
    title: `Réparation de toiture à ${nom}`,
    html: `<p>...</p>`,
  },
];

// On dérive l'id une seule fois, réutilisé par le sommaire ET les sections.
const sections = rawSections.map((s) => ({ ...s, id: slugify(s.title) }));

// On construit le tableau attendu par le composant.
const headings = sections.map((s) => ({ depth: 2, slug: s.id, text: s.title }));
---

<Layout title={`Couvreur à ${nom} : nettoyage, réparation, rénovation de toiture`}>
  <h1>Couvreur à {nom} : entretien, réparation et rénovation de toiture</h1>

  <TableOfContents headings={headings} />

  {sections.map((s) => (
    <section id={s.id}>
      <h2>{s.title}</h2>
      <Fragment set:html={s.html} />
    </section>
  ))}
</Layout>
```

> Le même `slugify(title)` sert au sommaire et aux `id` de section : **impossible d'avoir
> une ancre cassée** (le lien et la cible sont dérivés de la même source).

---

## 5. Rédaction des titres — ce qui fait une bonne pill

| ✅ Bon titre (candidat pill) | ❌ Mauvais titre |
|---|---|
| `Nettoyage de toiture à Cernay-la-Ville` | `Le nettoyage de toiture à Cernay la Ville` *(déterminant inutile)* |
| `Réparation de fuite à Cernay-la-Ville` | `Des prestations dans le Domaine des travaux de couverture` *(long + vague → tronqué)* |
| `Prix d'une rénovation de toiture` | `Notre savoir-faire` *(non autonome, aucun mot-clé)* |

Règles :

- **Court** : ~40-50 caractères. Au-delà, Google coupe avec « … » (effet peu pro).
- **Autonome** : la section doit se lire seule. Si elle n'a de sens qu'avec le reste, Google l'écarte.
- **Distinct** : pas deux titres qui se ressemblent, sinon dédoublonnage.
- **Couple service + ville** dès que pertinent : renforce la pertinence locale.
- **`h2`/`h3` uniquement** pour les sections principales. Google privilégie ces niveaux.

---

## 6. Checklist technique (bonnes pratiques Google, doc à jour 2026)

- [ ] `Ctrl+U` (source HTML brut) → je vois de vrais `id="..."` sur les `h2`/`h3`.
- [ ] `Ctrl+U` → je vois un `<nav>` avec de vrais `<a href="#ancre">` (pas injecté en JS).
- [ ] Contenu ciblé **immédiatement visible** (jamais dans un accordéon replié par défaut).
- [ ] **Aucun JS ne détourne le scroll** ni ne réécrit/supprime le fragment `#ancre` de l'URL.
- [ ] `scroll-margin-top` posé si header sticky (confort utilisateur, sans casser l'ancre).
- [ ] Titre `<title>` et `<h1>` informatifs, compacts, uniques par page.
- [ ] Maillage interne : la page reçoit des liens contextuels avec ancres descriptives.
- [ ] Sitemap à jour + page indexable (`index, follow`).

### Vérifications rapides

```bash
# 1. Les ancres existent-elles dans le HTML SERVI (sans exécuter de JS) ?
curl -s https://mon-site.fr/couvreur/cernay-la-ville/ | grep -o 'id="[^"]*"'

# 2. Le sommaire contient-il de vrais liens de fragment ?
curl -s https://mon-site.fr/couvreur/cernay-la-ville/ | grep -o 'href="#[^"]*"'
```

Si ces deux commandes renvoient tes ancres et tes liens, tu es bon côté crawl.
(Contre-exemple : un sommaire type Breakdance/`tocbot` renverra « There are no headings
in this document » dans le HTML brut, car il est construit en JS côté client.)

---

## 7. Ce qui reste hors de ton contrôle

- Google choisit **s'il affiche** des pills, **combien** (2 à 4) et **lesquelles**.
- Les pills apparaissent surtout quand la page **se positionne déjà bien** sur la requête.
- Délai : re-crawl + ré-évaluation → **compter plusieurs semaines** après mise en ligne.
- Tu **prépares le terrain** (structure + ancres + titres) ; tu ne déclenches pas.

---

## 8. Résumé du flux de déploiement

1. `slugify.ts` déposé dans `src/lib/`.
2. `TableOfContents.astro` déposé dans `src/components/`.
3. Cas Markdown → `rehype-slug` + passer `headings` de `render()` au composant.
   Cas data-driven → modéliser en `sections[]`, dériver `id` via `slugify`, rendre `<nav>` + `<section id>`.
4. Réécrire les titres selon la grille (court / autonome / service+ville).
5. Valider avec les deux `curl` (ancres + liens présents dans le HTML brut).
6. Publier, soigner le maillage interne, attendre le re-crawl.
