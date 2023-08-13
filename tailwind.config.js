/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parrot: "#EEF266",
        gray: "#D9D9D9",
        dark: "#262626",
        cgreen: "#60E1A9",
      },
      fontFamily: {
        poppins: "Poppins",
        orbi: "Orbitron",
      },
    },
  },
  plugins: [],
};
