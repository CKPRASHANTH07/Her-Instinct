/** @type {import('tailwindcss').Config} */
const tailwindCSSAnimista =require("tailwindcss-animistacss")
const animista__defaults = require('tailwindcss-animistacss/animista__defaults')
module.exports = {
  content:["./templates/*html"],
  theme: {
    extend: {
      colors:{
        'beige':'rgb(247, 200, 224)',
        'gr':'rgba(253, 253, 253, 0.8)'
      },
      fontFamily:{
        'body':['Pacifico','cursive'],
        'quotes':['Great Vibes','cursive'],
      },
      letterSpacing:{
        'rombha':'0.25rem'
      }
    }
  },
  plugins: [
    tailwindCSSAnimista({
      classes:['animate__tracking-in-expand','animate__focus-in-expand'],
      settings:{
        'animate__tracking-in-expand':{
          duration:2000,
          delay:10,
          iterationCounts:2,
          isInfinite:true,
        },
        'animate__focus-in-expand':{
          duration:1000,
          delay:1,
          iterationCounts:3,
          isInfinite:false,
        },
      },
      variants:["responsive"]
    })
  ],
}

