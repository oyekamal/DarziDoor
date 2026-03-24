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
        green: {
          DEFAULT: "#1B4D35",
        },
        gold: {
          DEFAULT: "#C9A84C",
        },
        surface: "#E8F5EE",
        bg: "#FAFAF8",
        "text-primary": "#1A1A1A",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      minHeight: {
        svh: "100svh",
      },
    },
  },
  plugins: [],
};

export default config;
