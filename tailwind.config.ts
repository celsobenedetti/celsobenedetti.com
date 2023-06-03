import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crust: "#232634",
        mantle: "#292c3c",
        base: "#303446",
        surface: "#3b4057",
        secondary: "#ca9ee6",
        text: "#c6d0f5",
        subtext: "#949cbb",
        overlay: "#737994",
      },
      animation: {
        "ping-slow": "ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
