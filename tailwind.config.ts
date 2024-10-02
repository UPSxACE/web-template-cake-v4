import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          brown: "#381c0f",
          orange: "#df543d",
          pink0: "#f1e3e0",
          pink1: "#f2e6e5",
          pink2: "#f3e5e3",
          pink3: "#d0bab9",
          pink4: "#d1abb0",
          pink5: "#ec757d",
          grey1: "#cbc3c4",
          grey2: "#b3b4b2",
          grey3: "#938c8c",
          grey4: "#717c97",
          grey5: "#35343b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
