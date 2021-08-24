module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#663399",
        primarybg: "#040d21",
        secondary: "rgb(18, 131, 218)",
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
