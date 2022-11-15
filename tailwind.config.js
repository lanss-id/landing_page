/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
    colors: {
      'abu': '#292929'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
