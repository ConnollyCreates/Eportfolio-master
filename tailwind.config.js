// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0404",
        secondary: "#aaa6c3",
        tertiary: "#1a0a0a",
        "black-100": "#150a0a",
        "black-200": "#0a0404",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #2a1015",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #0a0404 0%, #1a0a0a 50%, #DC2626 100%)",
      },
    },
  },
  plugins: [],
};
