import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';

// IMPORTANT : toutes les URLs actuelles du site (WordPress) se terminent par un
// slash et sont conservées à l'identique dans la migration Astro — ces pages sont
// déjà en 1re position sur beaucoup de requêtes, on ne change aucune URL.
export default defineConfig({
  site: 'https://la-centrale-des-metaux.fr',
  trailingSlash: 'always',
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        item.changefreq = 'weekly';
        item.priority = item.url === 'https://la-centrale-des-metaux.fr/' ? 1.0 : 0.7;
        return item;
      },
    }),
  ],
});
