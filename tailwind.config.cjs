/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        20: '20%', //flexbasis of body
        80: '80%' //flexbasis of sidemenu
      },

      height: {
        '90': '90%'
      },

      colors: {
        sideMenuBg: '#181818',
        bodyBg: '#ffff',
        
      }
    },
  },
  plugins: [],
}
