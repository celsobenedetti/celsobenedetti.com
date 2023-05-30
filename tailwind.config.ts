import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    bg: {
      banana: "#FFF",
    },
    extend: {
      colors: {
        base: "#232634",
        secondary: "#ca9ee6",
        text: "#c6d0f5",
        subtext: "#949cbb",
        overlay: "#949cbb",
        surface: "#303446",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
