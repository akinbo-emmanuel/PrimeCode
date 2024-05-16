/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#272432",
          "200": "#151419",
          "300": "#0f0e13",
          "400": "rgba(255, 255, 255, 0.9)",
        },
        black: "#000",
        white: "#fff",
        mediumblue: {
          "100": "#4236eb",
          "200": "#1002b6",
        },
        gainsboro: "#e6e6e6",
        navy: "#000588",
        darkgray: "#a0a0a0",
        silver: "#bcbcbc",
        dimgray: "#727273",
        aliceblue: "#f3f8ff",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "stix-two-text": "'STIX Two Text'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        sora: "Sora",
      },
      borderRadius: {
        mini: "15px",
        "2981xl": "3000px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      "29xl": "3rem",
      "10xl": "1.813rem",
      "19xl": "2.375rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "23xl": "2.625rem",
      "6xl": "1.563rem",
      "15xl": "2.125rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      xs: "0.75rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      "11xl": "1.875rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
