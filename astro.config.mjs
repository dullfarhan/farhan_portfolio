// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        weights: [400, 500, 600, 700],
        display: "swap",
        cssVariable: "--font-inter",
      },
    ],
  },
});


