// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://dev.xuby.cl',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  output: 'static'
});