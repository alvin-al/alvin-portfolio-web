/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        josefin: ['Josefin sans', 'sans-serif'],
      },
      width: {
        'desktop' : '1024px',

      }
    },
  },
  plugins: [],
}