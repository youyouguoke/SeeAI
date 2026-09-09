// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// SeeAI — static export to Cloudflare Pages (direct upload, no SSR).
// https://astro.build/config
export default defineConfig({
  site: 'https://seeai.site',
  output: 'static',
  integrations: [mdx(), react()],
  // Locale routing is handled with explicit pages (/zh/, /en/) — no astro:i18n routing.
  vite: {
    plugins: [tailwindcss()],
  },
});
