

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    fontFamily: {
      'kau': ['Kaushan Script']
     },
    extend: {
      colors: {
        green: {
          DEFAULT: '#ff6363',
        },
        dark:{
          DEFAULT:'#010101',
          100:'#0a0b1e',
          200:'#16181d',
          300:'#0f1115',
          400:'#202125'
        }
      }
    },
    listStyleType: {
      none: 'none',
     disc: 'disc',
     decimal: 'decimal',
     square: 'square',
     roman: 'upper-roman',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}