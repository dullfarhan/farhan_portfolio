/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E8E8E8", // full-site background
        surface: "#F5F5F5", // cards, containers
        textPrimary: "#0C131C", // main headings/text
        textSecondary: "#263A53", // subtext/descriptions
        tertiaryBg: "#00D1E8",
      },
      screens: {
        'xl': '1600px',
      }
    },
  },
  plugins: [],
};
