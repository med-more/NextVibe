/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette de couleurs personnalisée
        'smoky-black': '#11120D',
        'olive-drab': '#565449',
        'bone': '#D8CFBC',
        'floral-white': '#FFFBF4',
      },
    },
  },
  plugins: [],
}
