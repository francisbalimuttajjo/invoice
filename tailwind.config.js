module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkTheme: "class",
  variants: {
    extend: {},
  },
  theme: {
    screens: {
      xs: "490px",
      sm: "670px",
      // // => @media (min-width: 576px) { ... }

      // md: "1020px",
      // // => @media (min-width: 960px) { ... }

      // lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
