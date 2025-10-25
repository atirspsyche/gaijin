/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["JapaneseStyle"],
        body: ["Urbanist", "Helvetica Neue", "Helvetica", "Arial", "sansserif"],
        sans: ["Urbanist"],
        serif: ["Urbanist"],
      },
      colors: {
        reishyRed: "#61072d",
        kushiBlue: "#0d3862",
        rabataFlame: "#f37043",
        sage: "#5f8683",
        zenShadow: "#cec1a7",
        zenLight: "#e4dcca",
        primary: "#61072d",
        secondary: "#0d3862",
        accent: "#f37043",
        neutral: "#5f8683",
        background: "#e4dcca",
        backgroundDark: "#cec1a7",
      },
    },
  },
  plugins: [],
};
