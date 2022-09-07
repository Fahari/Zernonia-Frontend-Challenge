import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://fahari.github.io',
  base: '/zernonia-frontend-challenge',
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: ["@fontsource/poppins"],
    },
  },
});
