export const theme = {
  colors: {
    primary: {
      DEFAULT: "#4F46E5", // indigo-600
      hover: "#4338CA", // indigo-700
      light: "#818CF8", // indigo-400
      dark: "#3730A3", // indigo-800
    },
    background: {
      DEFAULT: "#000000",
      card: "#111827", // gray-900
      elevated: "#1F2937", // gray-800
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#D1D5DB", // gray-300
      muted: "#9CA3AF", // gray-400
      accent: "#818CF8", // indigo-400
    },
    border: {
      DEFAULT: "#374151", // gray-700
      light: "#4B5563", // gray-600
    },
  },
  spacing: {
    page: {
      x: "1rem",
      y: "2rem",
    },
    section: {
      x: "1.5rem",
      y: "2rem",
    },
    card: {
      x: "1.5rem",
      y: "1.5rem",
    },
  },
  borderRadius: {
    card: "0.5rem",
    button: "9999px",
  },
  container: {
    padding: "1rem",
    maxWidth: "1280px",
  },
  typography: {
    heading: {
      1: "text-3xl font-bold",
      2: "text-2xl font-semibold",
      3: "text-xl font-medium",
    },
  },
} as const;

// Common class combinations
export const classes = {
  container: "container mx-auto px-4",
  pageTitle: "text-3xl font-bold text-white mb-8",
  sectionTitle: "text-2xl font-semibold text-white mb-4",
  card: "bg-gray-900 p-6 rounded-lg",
  link: "text-indigo-400 hover:text-indigo-300 transition-colors duration-200",
  button: {
    primary:
      "bg-indigo-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-xs hover:shadow-amber-500/50 font-bold",
    secondary:
      "bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-all duration-300",
  },
} as const;
