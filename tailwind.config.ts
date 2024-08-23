import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 6px 1px rgba(85, 234, 212, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: [
          "var(--font-jet-brains-mono-medium)",
          "var(--font-jet-brains-mono-bold)",
          "var(--font-jet-brains-mono-extrabold)",
        ],
        secondary: [
          "var(--font-big-blue-term-regular)",
          "var(--font-big-blue-term-plus-regular)",
          "var(--font-big-blue-term-plus-mono-regular)",
        ],
      },
      gridAutoFlow: {
        dense: "dense",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      gridAutoFlow: ["dense"],
    },
  },
};
export default config;
