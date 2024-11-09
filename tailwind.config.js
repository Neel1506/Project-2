/* npx tailwindcss -i ./style.css -o ./output.css --watch  */


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "logoFont":['Ga Maamli','sans-serif'],
        "fantaFont":['Playfair Display', 'sans-serif']
      
      },
      colors: {
        customOrange: 'rgb(255, 136, 0)',
      },
      animation: {
        'rotate360': 'rotate360 10s linear infinite',
      },
         keyframes: {
          rotate360: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }
    },
  },
  plugins: [],
}

