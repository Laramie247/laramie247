import type { Config } from "tailwindcss";
import { theme } from "./lib/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        background: theme.colors.background,
        text: theme.colors.text,
        border: theme.colors.border,
      },
      maxWidth: {
        container: theme.container.maxWidth,
      },
      padding: {
        "page-x": theme.spacing.page.x,
        "page-y": theme.spacing.page.y,
        "section-x": theme.spacing.section.x,
        "section-y": theme.spacing.section.y,
        "card-x": theme.spacing.card.x,
        "card-y": theme.spacing.card.y,
      },
      borderRadius: {
        card: theme.borderRadius.card,
        button: theme.borderRadius.button,
      },
    },
  },
  plugins: [],
};

export default config;
