/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'xll':"1080px"
      },
      backgroundImage: {
        'hero-back': ["url('../img/header/background.png')"],
        'footer-bg': ["url('../img/footer-bg.png')"],
        'name':'linear-gradient(180deg, rgba(217, 217, 217, 0) 22.15%, #FFFFFF 100%)'
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

