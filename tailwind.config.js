/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#F07090',
          400: '#E84375',
          500: '#D91A54',
          600: '#B5153F',
          900: '#2D0311',
        },
      },
    },
  },
  plugins: [],
}
