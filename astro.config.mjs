// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Static export — deploy to Cloudflare Pages, no server needed
  output: 'static',

  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});