/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#f7c854",
          light: "rgba(247, 200, 84, 0.9)",
        },
        black: {
          DEFAULT: "#212429",
          light: "#3a3e44",
        },
        cream: {
          DEFAULT: "#fffcf7",
          transparent: "transparent",
        },
        white: {
          DEFAULT: "#ffffff",
          transparent: "transparent",
        },
      },
      fontFamily: {
        sans: ["Century gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
