import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#ca9ee6",
        dark: "#232634",
      },
    },
  },
  plugins: [],
} satisfies Config;
