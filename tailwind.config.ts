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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["var(--inter)", "sans-serif"],
        dancing_script: ["var(--dancing_script)"],
        exo_2: ["var(--exo_2)"],
        playwrite: ["var(--playwrite)"],
      },
    },
  },
  plugins: [],
};
export default config;
