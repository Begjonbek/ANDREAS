/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'xll':"1080px"
      },
      backgroundImage: {
        'hero-back': ["url('../img/header/background.png')"]
      },
      fontFamily: {
        'inter':["'Inter','sans-serif'"]
        
      },
      colors: {
        'blue-250':"#002B64",
        'gray-250':"#949494"
      }
    },
  },
  plugins: [],
}

