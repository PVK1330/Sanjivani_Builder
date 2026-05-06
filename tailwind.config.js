/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E8671A',
          dk: '#C4540F',
          lt: '#FEF3EB',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
