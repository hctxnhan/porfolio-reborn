/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#020617",
        text: "#f8fafc",
        border: "#94a3b8",
      },
      keyframes: {
        marqueeone: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(calc(-100% + 100vw))" },
        },
        marqueetwo: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(calc(-100% + 100vw))" },
        },
      },
    },
    backgroundSize: (theme) => ({
      auto: "auto",
      cover: "cover",
      contain: "contain",
      ...theme("spacing"),
    }),
  },
  plugins: [],
};
