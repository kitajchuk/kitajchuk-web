module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#f30541',
        yellow: '#eefd02',
        green: '#10ff59',
        blue: '#2affea', // teal
        indigo: '#1795d4', // blue
        purple: '#6441a4',
        pink: '#f26d7d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
