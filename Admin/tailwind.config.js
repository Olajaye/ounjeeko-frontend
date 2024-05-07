/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-100": "#49557e",
      "button-col":"#747474",
      "tomato": "#000080",
      "white": "white",
      "black": "black",
      'grey':'grey'
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "760px",
        md: "1050px",
      },
    },
    gridTemplateColumns: {
      'cart': "0.5fr 2fr 1fr 1fr 0.5fr",
      'xscart': "1fr 3fr 1fr"
    }
    
  },
  plugins: [],
}
