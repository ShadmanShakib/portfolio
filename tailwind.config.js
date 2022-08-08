/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamilys: {
      sora: ["Sora", "sans-serif"],
      "sora-bold": ["Sora", "sans-serif", "bold"],
      "sora-medium": ["Sora", "sans-serif", "medium"],
      "sora-light": ["Sora", "sans-serif", "light"],
      "sora-thin": ["Sora", "sans-serif", "thin"],
      "sora-ultra-light": ["Sora", "sans-serif", "ultra-light"],
    },
    extend: {},
  },
  plugins: [],
};
