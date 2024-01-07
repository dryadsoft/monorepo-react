import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: ["class"],
  theme: {
    extend: {
      colors: {
        // main - color
        primary: "#F5C54B",
        secondary: "#818181",
        //input
        "input-primary": colors.gray[800],
        "input-border-hover": colors.gray[400],
        "input-bg-hover": colors.gray[50],
        "input-border-focus": colors.gray[400],
        //label

        // Button
        "btn-primary": colors.lime[600],
        "btn-secondary": colors.gray[50],
        "btn-action-primary": colors.black,
        "btn-action-secondary": colors.gray[50],
        // Button - hover
        "btn-primary-hover": colors.lime[700],
        "btn-secondary-hover": colors.gray[200],
        "btn-action-primary-hover": colors.gray[700],
        "btn-action-secondary-hover": colors.gray[200],
        // Button - label
        "btn-label-primary": colors.white,
        "btn-label-secondary": colors.gray[500],
      },
    },
  },
  plugins: [],
};
