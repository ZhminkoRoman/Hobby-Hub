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
      keyframes: {
        bgSpin: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        bgSpin: "bgSpin 5s linear infinite",
      },
      boxShadow: {
        pixelBoxShadow: "3px 3px 0px",
      },
      dropShadow: {
        pixelTextShadow: "2px 2px 0px #292929",
      },
      backgroundImage: {
        watercolor: "url('/public/watercolor.png')",
        button:
          "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255, 255, 255, 0.2) 5px),repeating-linear-gradient(90deg,transparent,transparent 4px,rgba(255, 255, 255, 0.2) 5px),linear-gradient(to top left, #05d9e8 50%, #55ead4)",
        hoveredButton: "linear-gradient(to top left, #05d9e8 50%, #55ead4)",
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
