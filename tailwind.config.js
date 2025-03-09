module.exports = {
  purge: [],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(85 81 227)',
        'secondary': '#2b2d77',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
