/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f3efe0",
        secondary: "#C7DFC5",
        tertiary: "#4d4d4d",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'black':'#000000',
        'jet':'#373737',
        'jasmine':'#fce694',
        'satin':'#cba135',
        'aqua':'#DFDBC7',
        'onyx':'#474448'

      },
      boxShadow: {
        card: "0px 35px 120px -15px #E7DEBA",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};