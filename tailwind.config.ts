import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canopy: "#123227",
        deep: "#071611",
        moss: "#4f6f52",
        leaf: "#789461",
        sage: "#bac7a7",
        clay: "#b66a3b",
        linen: "#f5efe3",
        bone: "#fffaf0",
        ink: "#1f2623",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
