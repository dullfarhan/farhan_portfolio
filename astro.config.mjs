// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://farhan.info',
  integrations: [tailwind(), sitemap()],
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