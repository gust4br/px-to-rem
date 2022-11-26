/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
      colors:{
        transparent: 'transparent',

        black: '#000000',
        white: '#ffffff',

        gray: {
          900: '#121214',
          800: '#202024',
          600: '#B4B4B4',
          500: '#D2D2D2',
          400: '#7c7c8a',
          200: '#c4c4cc',
          100: '#e1e1e6',
        },
        cyan: {
          500: '#81d8f7',
          300: '#9BE1FB',
        },
        orange: {
          900: '#FF9960',
        },

      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
