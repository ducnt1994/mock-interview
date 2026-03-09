import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          900: "#0E2D11",
          800: "#16471B",
          700: "#1F5E25",
          600: "#28752E",
          500: "#2E7D32",
          400: "#4F9B53",
          300: "#76B77A",
          200: "#A2D2A4",
          100: "#CBE7CC",
          50: "#E8F5E9",
          25: "#F3FBF4"
        },
        "secondary": "#D5E5D6",
        "neutral-landing": "#F1F5F9",
      }
    },
  },
  plugins: [typography],
};

export default config;