/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
      light_gray: '#A7A7A7',
      dark_gray: '#7B7B7B',
      primary: '#FFC979',
      placeholder: '#FFFAF2',

    },
    fontFamily:{
      primary: ['Poppins', 'sans-serif'],
    },}
  },
  plugins: []
}
