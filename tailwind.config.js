/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5051f9",
          lighter: "#6A6BF9",
          light: "#9A9BFB",
          darker: "#0D0EF0",
          dark: "#0B0CBE",
        },
        accent: "#1e1f25",
        surface: "#131517",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
