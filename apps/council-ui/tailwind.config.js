/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    prefix: "daisy-",
    themes: [
      {
        elementDaoTheme: {
          primary: "#005EBE", // principal royal blue
          secondary: "#6ACDE2", // principal blue
          accent: "#19C2A3", // topaz
          neutral: "#1B1D21", // black
          "base-100": "#F8F8F8",
          "base-200": "#FFFFFF",
          "base-300": "#FFFFFF",
          info: "#B2CAE3", // blueGrey
          success: "#007F00", //statusGreen
          warning: "#FFC300", // goldYellow
          error: "#F73030", // deepRed
        },
      },
    ],
  },
};
