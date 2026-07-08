## Sitelinks "pills" — pages ville (SEO local)

Objectif : structurer chaque page service+ville pour que Google puisse générer des
jump-to sitelinks (pills) à partir des titres de section.

Règles impératives quand tu crées/modifies une page ville :

1. Sommaire ancré OBLIGATOIRE, rendu côté serveur (SSG/SSR) — jamais en JS client.
   Utiliser le composant `src/components/TableOfContents.astro`.
2. Chaque `<h2>`/`<h3>` de section porte un `id` stable via `slugify()` (`src/lib/slugify.ts`).
   L'`id` du sommaire et l'`id` de la `<section>` dérivent du MÊME `slugify(title)`.
3. Contenu data-driven : modéliser en `sections[]` ({ title, html }), pas de HTML libre.
   Dériver `id = slugify(title)`, puis rendre `<nav>` + `<section id>` + `<h2>`.
4. Titres de section : COURTS (~40-50 car.), autonomes, distincts, couple service+ville.
   Ex. ✅ "Nettoyage de toiture à {ville}"  ❌ "Des prestations dans le domaine de la couverture".
5. Ne jamais cacher une section derrière un accordéon replié par défaut.
   Ne jamais ajouter de smooth-scroll JS qui casse/supprime le fragment `#ancre` de l'URL.
6. Ajouter `scroll-margin-top` sur les cibles si header sticky.
7. Markdown/collections : activer `rehype-slug` dans astro.config, passer `headings` de
   `render()` directement au composant.

Vérif avant commit : `curl -s <url> | grep -o 'id="[^"]*"'` ET `... 'href="#[^"]*"'`
doivent renvoyer les ancres/liens dans le HTML brut. Détail complet : docs/astro-sitelink-pills.md