/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bank-blue': '#0a3a6a',
        'bank-yellow': '#d9a05b',
        'bank-light': '#f4f7fb',
      },
    },
  },
  plugins: [],
}