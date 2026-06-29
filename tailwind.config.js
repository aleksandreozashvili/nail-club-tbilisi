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
        gold: {
          300: '#F4E0A5',
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B89728',
          700: '#997B1E',
        },
        rose: {
          gold: '#B76E79',
        },
        dark: {
          bg: '#0B0D11',
          surface: '#141720',
          card: '#1D212E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Georgian"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'glow-lg': '0 0 40px rgba(212, 175, 55, 0.4)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
      }
    },
  },
  plugins: [],
}
