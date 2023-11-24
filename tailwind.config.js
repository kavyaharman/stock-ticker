/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        peRed: "#FFEDEC",
        peGreen: "#E6FCE8",
        peGray: "#F5F5F5",
        magenta: "#581638",
      }
    },
    fontFamily: {
      'body': ['font-mono']
    }
  },
  plugins: [],
}
