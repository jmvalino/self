module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#00A1C9",
          100: "#719BAC",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
