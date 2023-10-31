import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#05141f",
        secondary: "#0071bc",
      },
      transitionProperty: {
        width: "width",
        fadeIn: "visible opacity transform",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "120ch",
          },
        },
      },
      keyframes: {
        wiggle: {
          "35%": { transform: "rotate(17deg)" },
          "55%": { transform: "rotate(-17deg)" },
          "65%": { transform: "rotate(17deg)" },
          "75%": { transform: "rotate(-17deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
