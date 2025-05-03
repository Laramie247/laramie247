import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: "#1a1a1a", // Main text color
          light: "#ffffff", // Light text color
          dark: "#000000", // Dark text color
        },
        // Accent colors from Navigation
        accent: {
          DEFAULT: "#4f46e5", // indigo-700
          hover: "#1e40af", // blue-800
          highlight: "#f59e0b", // amber-500
        },
        // Background colors
        background: {
          DEFAULT: "#ffffff", // Main background
          dark: "#000000", // Footer background
          light: "#f3f4f6", // Light background
        },
        // Warning colors
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          light: "#fef3c7", // amber-100
          dark: "#b45309", // amber-700
        },
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
