// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const base = "ac-2025-website-prototype-astro";

// https://astro.build/config
export default defineConfig({
  site: "https://dublin-digital-radio.github.io",
  base,
  redirects: {
    "/schedule": `/${base}/schedule/2025-05-01`,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
