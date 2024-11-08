import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        "-10": "-10px", // Adds a new margin value
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: "#F4796C",
        custommBlue: "#183354",
      },
    },
  },
  plugins: [],
};
export default config;
