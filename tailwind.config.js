
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b2b2b",
        secondary: "#232323",
        tertiary: "#d4b196",
        mainText: "#d4b196",
        heading: "#fff",
        paragraph: "#cfd4da",
        yellowbg: "#cfc09f",
        text: "rgb(0, 0, 0)",
      },
      fontSize: {
        small: "14px",
        medium: "25px",
        large: "40px",
        xl: "100px",
      },
      fontWeight: {
        primary: "400",
        secondary: "500",
        tertiary: "600",
      },
      lineHeight: {
        primary: "1.7em",
        secondary: "1.1em",
        tertiary: "1em",
      },
      letterSpacing: {
        primary: "-0.6px",
      },
      backgroundImage: {
        "theme-gradient": "linear-gradient(to right, #5d7227, #203f15)",
        "primary-gradient": "url('../assets/backgroundgradient.png')",
      },
      fontFamily: {
        primary: "'Montserrat', serif",
        secondary: "'DM Sans', sans-serif",
      },
      screens: {
        below900: { max: "900px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
