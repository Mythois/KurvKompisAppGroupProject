/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        secondary: '#678765', // just put a random color
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}
