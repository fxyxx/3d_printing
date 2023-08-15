/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgBlack: "#131313",
        textWhite: "#F0F0F0",
        bgViolet: "#1c71a6",
        orange: "#d76e34",
        greyTrans: "#131313a2",
        orangeTrans: "#ff762cce",
        transparent: "#f0f0f00d",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
