/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D4620A',
        'primary-light': '#E87A24',
        'primary-dark': '#B34F00',
        ink: '#1A1207',
      },
      fontFamily: {
        body: ['var(--font-body)', 'ui-sans-serif', 'sans-serif'],
        display: ['var(--font-display)', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
