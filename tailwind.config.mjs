/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      pink: {
        50: "#FFE5EC",
        100: "#FFC2D1",
        400: "#FFB3C6",
        500: "#FFC2D1",
      }, // Accent colors, used mainly for star color, heading and buttons
      pink: {
        100: "#FFE5EC",
        200: "#FFC2D1",
        300: "#FFC2D1",
        400: "#FFC2D1",
        500: "#FFB3C6",
        600: "#FFB3C6",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
