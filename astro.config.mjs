// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hcdraci.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
  integrations: [sitemap()]
});