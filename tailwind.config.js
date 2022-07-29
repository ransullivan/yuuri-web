module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#2B2B28",
        secondary: "#4A4A48",
        tertiary: "#131419",
        fortiary: "#3A3B3C",
        accent: {
          DEFAULT: "#100F0F",
          hover: "#EBEBE3",
        },
        paragraph: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
