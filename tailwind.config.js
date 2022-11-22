/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
      left: '#A7A7A7',
      right: '#7B7B7B',
      primary: '#FFC979',
      placeholder: '#FFFAF2',

    },
    fontFamily:{
      primary: ['Poppins', 'sans-serif'],
    },}
  },
  plugins: []
}
