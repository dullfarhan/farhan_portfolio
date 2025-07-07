// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
    site: 'https://farhan.info',
  integrations: [tailwind(), sitemap(), robotsTxt()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        weights: [300, 400, 500, 600, 700],
        display: "swap",
        cssVariable: "--font-inter",
      },
    ],
  },
});