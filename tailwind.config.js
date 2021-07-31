module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2ea44f",
        primarybg: "#040d21",
      },
      fontFamily: {
        body: ["Roboto", "san-sarif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
