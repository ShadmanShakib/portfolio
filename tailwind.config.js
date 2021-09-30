module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#663399",
        primarybg: "#273240",
        secondary: "rgb(18, 131, 218)",
        c1: "#1d3557",
        c2: "#457b9d",
        c3: "#a8dadc",
        c4: "#f1faee",
        c5: "#e63946",
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
