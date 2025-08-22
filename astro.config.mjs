import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://dev.xuby.cl',
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
