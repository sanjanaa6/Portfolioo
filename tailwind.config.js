/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        panel: '#111111',
        card: '#181818',
        accent: '#FF6B00',
        text: '#FFFFFF',
        muted: '#B7B7B7'
      },
      boxShadow: {
        glow: '0 0 40px rgba(255,107,0,0.25)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
