/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#E8E8E8",
        surface: "#F5F5F5",
        textPrimary: "#0C131C",
        textSecondary: "#263A53",
        tertiaryBg: "#00D1E8",
        // Premium accent colors
        accent: {
          indigo: "#6366F1",
          purple: "#8B5CF6",
          cyan: "#06B6D4",
          pink: "#EC4899",
          emerald: "#10B981",
        },
        // Glassmorphism colors
        glass: {
          light: "rgba(255, 255, 255, 0.7)",
          dark: "rgba(15, 23, 42, 0.7)",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-shine': 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
        'gradient-border': 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899, #06B6D4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'border-flow': 'borderFlow 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
        'premium': '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
        'premium-lg': '0 30px 80px -15px rgba(0, 0, 0, 0.4)',
        'glow-indigo': '0 0 40px rgba(99, 102, 241, 0.4)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.4)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xl: "1600px",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        heading: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
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
