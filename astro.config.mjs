import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dev.xuby.cl',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
