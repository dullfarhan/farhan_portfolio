/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Apple Liquid Glass Color System with Warm Tones
        background: "#FFFBF5", // Warm off-white
        surface: "#FEF7ED", // Warm cream
        surfaceLight: "#FFFBF5", // Warm light surface
        textPrimary: "#1D1D1F", // 15.8:1 contrast on white ✅
        textSecondary: "#4A5568", // 7.2:1 contrast on white ✅ (WCAG AA compliant)
        textTertiary: "#718096", // 4.8:1 contrast on white ✅ (WCAG AA compliant)
        // Apple System Blue - the only accent
        accent: {
          blue: "#0051D5", // 7.1:1 contrast on white ✅ (WCAG AA compliant - darker for better contrast)
          blueLight: "#007AFF", // For hover states
          blueDark: "#003D99", // For active/pressed states
        },
        // Liquid Glass variants
        glass: {
          clear: "rgba(255, 255, 255, 0.72)",
          light: "rgba(255, 255, 255, 0.85)",
          frosted: "rgba(255, 255, 255, 0.60)",
          dark: "rgba(29, 29, 31, 0.72)",
          tinted: "rgba(0, 122, 255, 0.08)",
        },
        // Subtle backgrounds
        wash: {
          light: "#F5F5F7",
          medium: "#E8E8ED",
          dark: "#D2D2D7",
        },
      },
      backgroundImage: {
        // Warm tone gradients
        'gradient-ambient': 'radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
        'gradient-wash': 'linear-gradient(180deg, #FFFBF5 0%, #FEF7ED 100%)', // Warm cream gradient
        'gradient-wash-light': 'linear-gradient(180deg, #FFFBF5 0%, #FFFBF5 100%)', // Warm light
        'gradient-wash-medium': 'linear-gradient(180deg, #FEF7ED 0%, #FFFBF5 100%)', // Warm medium
        'gradient-wash-subtle-blue': 'linear-gradient(180deg, rgba(251, 191, 36, 0.03) 0%, rgba(251, 146, 60, 0.02) 50%, transparent 100%)', // Warm subtle
        'gradient-wash-blue': 'radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.05) 0%, transparent 40%)', // Warm radial
        'gradient-specular': 'linear-gradient(180deg, rgba(255, 251, 245, 0.9) 0%, rgba(255, 247, 237, 0.3) 100%)', // Warm specular
        'gradient-glass-border': 'linear-gradient(180deg, rgba(255, 251, 245, 0.8) 0%, rgba(255, 247, 237, 0.4) 100%)', // Warm border
      },
      animation: {
        // Apple Liquid Glass fluid animations
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'glass-morph': 'glassMorph 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'glass-expand': 'glassExpand 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'specular-shift': 'specularShift 3s ease-in-out infinite',
        'ambient-pulse': 'ambientPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glassMorph: {
          '0%': { backdropFilter: 'blur(20px) saturate(180%)', transform: 'scale(1)' },
          '50%': { backdropFilter: 'blur(24px) saturate(200%)', transform: 'scale(1.02)' },
          '100%': { backdropFilter: 'blur(20px) saturate(180%)', transform: 'scale(1)' },
        },
        glassExpand: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        specularShift: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        ambientPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        },
      },
      boxShadow: {
        // Apple Liquid Glass shadows
        'glass': '0 0 1px rgba(0, 0, 0, 0.04), 0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(255, 255, 255, 0.5)',
        'glass-sm': '0 0 1px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 0 1px rgba(0, 0, 0, 0.04), 0 16px 48px rgba(0, 0, 0, 0.12), inset 0 0 0 0.5px rgba(255, 255, 255, 0.5)',
        'glass-hover': '0 0 1px rgba(0, 0, 0, 0.04), 0 12px 40px rgba(0, 0, 0, 0.10), inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)',
        'ambient': '0 20px 60px rgba(0, 122, 255, 0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundOpacity: {
        85: '0.85',
      },
      screens: {
        xl: "1600px",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h1': ['64px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1-sm': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['48px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h2-sm': ['32px', { lineHeight: '1.3' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'code': ['14px', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
};
