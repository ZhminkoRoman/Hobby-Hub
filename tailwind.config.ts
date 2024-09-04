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
        pixelBoxShadow: "3px 3px 0px",
      },
      dropShadow: {
        pixelTextShadow: "2px 2px 0px #292929",
      },
      backgroundImage: {
        watercolor: "url('/public/watercolor.png')",
        button: "linear-gradient(to top left, #05d9e8, #55ead4)",
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
