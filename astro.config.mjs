// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://farhan.info',
  integrations: [
    tailwind(), 
    sitemap(), 
    robotsTxt(),
    react({
      experimentalReactChildren: true,
    })
  ],
  vite: {
    ssr: {
      noExternal: ['@react-three/fiber', '@react-three/drei'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'gsap', 'lenis', 'lucide-react'],
      exclude: ['@react-three/fiber', '@react-three/drei'],
    },
  },
  // Font loading optimized - using Google Fonts directly for Space Grotesk and Fira Code
  // Removed Inter font to eliminate unnecessary preload warnings
});