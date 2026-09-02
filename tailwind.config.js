import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sky: colors.amber,
        violet: colors.orange,
        indigo: colors.orange,
        cyan: colors.yellow,
        slate: colors.stone,
        purple: colors.amber,
        pink: colors.orange,
        fuchsia: colors.yellow,
        cyber: {
          bg: '#05070f',
          card: 'rgba(15, 23, 42, 0.65)',
          border: 'rgba(56, 189, 248, 0.15)',
          glow: 'rgba(124, 58, 237, 0.25)',
          accent: '#38bdf8',
          purple: '#8b5cf6',
          pink: '#ec4899',
          amber: '#f59e0b',
          emerald: '#10b981'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(212, 163, 115, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(184, 115, 51, 0.4)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
