import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#068cf9",
        "background-light": "#f5f7f8",
        "background-dark": "#0f1a23",
        "content-light": "#e7eaed",
        "content-dark": "#1a2a3a",
        "text-primary-light": "#0d151c",
        "text-primary-dark": "#ffffff",
        "text-secondary-light": "#47779e",
        "text-secondary-dark": "#a0b3c6",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
