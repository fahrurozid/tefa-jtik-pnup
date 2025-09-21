/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"],
      },
      // animation: {
      //   blob: "blob 7s infinite",
      // },
      // keyframes: {
      //   blob: {
      //     "0%": { transform: "translate(0px, 0px) scale(1)" },
      //     "33%": { transform: "translate(30px, -50px) scale(1.1)" },
      //     "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
      //     "100%": { transform: "translate(0px, 0px) scale(1)" },
      //   },
      // },
      colors: {
        // primary: "#3DA9D8", 
        // primary: "#2A428C", 
        primary: "#0248C1", 
        // accent: "#F1FF0A", 
        // accent: "#FFEF4D", 
        accent: "#F8D613", 
        // accent2: "#fff200ff", 
        dark: "#111827", 
        light: "#FFFFFF", 
      },
    },
  },
  plugins: [],
};
