import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#e5e7eb",
        dark: "#343a40",
        primary: "#023047",
        secondary: "#FB8500",
        primaryContrast: "#f8f9fa",
        secondaryContrast: "#f8f9fa",

        white: "#ffffff",
        black: "#111133",
        danger: colors.red,
        warning: colors.orange,
        success: colors.green,
        info: colors.blue,
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
