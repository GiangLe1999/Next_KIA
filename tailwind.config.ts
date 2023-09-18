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
        secondary: "#2b2b2b",
        tertiary: "#00e9f8",
        quaternary: "#2e3237",
        pentanary: "#0071bc",
      },
      transitionProperty: {
        width: "width",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "120ch",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
