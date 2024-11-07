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
      keyframes: {
        swapColors1: {
          '0%, 100%': { color: '#f95c5c', boxShadow: '0px 0px 10px #f95c5c' },  // Facebook red
          '33%': { color: '#f9e15c', boxShadow: '0px 0px 10px #f9e15c' },     // Instagram yellow
          '66%': { color: '#f9a85c', boxShadow: '0px 0px 10px #f9a85c' },     // LinkedIn orange
        },

        swapColors2: {
          '0%, 100%': { color: '#f9e15c', boxShadow: '0px 0px 10px #f9e15c' },  // Facebook red
          '33%': { color: '#f95c5c', boxShadow: '0px 0px 10px #f95c5c' },     // Instagram yellow
          '66%': { color: '#f9a85c', boxShadow: '0px 0px 10px #f9a85c' },     // LinkedIn orange
        },
        swapColors3: {
          '0%, 100%': { color: '#f9a85c', boxShadow: '0px 0px 10px #f9a85c' },  // Facebook red
          '33%': { color: '#f9e15c', boxShadow: '0px 0px 10px #f9e15c' },     // Instagram yellow
          '66%': { color: '#f95c5c', boxShadow: '0px 0px 10px #f95c5c'  },     // LinkedIn orange
        }
      },
      animation: {
        swapColors1: 'swapColors1 6s ease-in-out infinite',
        swapColors2: 'swapColors2 6s ease-in-out infinite',
        swapColors3: 'swapColors3 6s ease-in-out infinite',

      }
    },
  },
  plugins: [],
};
export default config;
