/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#ff5c26", dark: "#e04e1d" },
        dark: "#1a1a1a",
        light: "#fafbff",
        gray: { DEFAULT: "#6b6b6b" },
      },
    },
  },
  plugins: [],
};
