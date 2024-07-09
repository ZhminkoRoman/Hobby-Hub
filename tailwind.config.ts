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
        glow: "0 0 10px 1px rgba(85, 234, 212, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--font-jet-brains-mono)"],
      },
    },
  },
  // variants: {
  //   extend: {
  //     backgroundColor: ["autofill"],
  //     borderColor: ["autofill"],
  //     textColor: ["autofill"],
  //   },
  // },
  // plugins: [
  //   function ({ addVariant, e }) {
  //     addVariant("autofill", ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `.${e(`autofill${separator}${className}`)}:autofill`;
  //       });
  //     });
  //   },
  // ],
  plugins: [],
};
export default config;
