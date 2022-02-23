module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  variants: {
    extend: {},
  },
  theme: {
    screens: {
      xs: "550px",
      sm: "700px",
      // // => @media (min-width: 576px) { ... }

      md: "1090px",
      // // => @media (min-width: 960px) { ... }

      // lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
