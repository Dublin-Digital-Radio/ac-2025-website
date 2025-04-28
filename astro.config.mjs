// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const base = "alternating-current-2025";

// https://astro.build/config
export default defineConfig({
  site: "https://listen.dublindigitalradio.com",
  base,
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
