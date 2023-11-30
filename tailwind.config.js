/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueBackground: "#E5F0FB",
        CustomBlue: "#3978B0",
        CustomGray: "#C9BEB1",
        customRed: "#F8DFD0"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        ManropeBold: ["ManropeBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
