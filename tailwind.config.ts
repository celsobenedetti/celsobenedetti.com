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
        mantle: "#292c3c",
        secondary: "#ca9ee6",
        text: "#c6d0f5",
        subtext: "#949cbb",
        overlay: "#949cbb",
        surface: "#3b4057",
      },
      animation: {
        "ping-slow": "ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
