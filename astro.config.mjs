// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dublin-digital-radio.github.io',
  base: 'ac-2025-website-prototype-astro',
  vite: {
    plugins: [tailwindcss()]
  }
});
