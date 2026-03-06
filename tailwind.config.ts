import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "500": "#2F7F33"
        },
        "secondary": "#D5E5D6",
        "neutral-landing": "#F1F5F9",
      }
    },
  },
  plugins: [],
};

export default config;