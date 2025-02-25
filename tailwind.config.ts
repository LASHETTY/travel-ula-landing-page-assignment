
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        safari: {
          50: "#fdf5ef",
          100: "#fae8d9",
          200: "#f3ceb3",
          300: "#eab088",
          400: "#e18a5c",
          500: "#d86b3c",
          600: "#c85431",
          700: "#a7422b",
          800: "#86382a",
          900: "#6d3126",
        },
        savanna: {
          50: "#f6f7f1",
          100: "#e6e9d8",
          200: "#ccd3b3",
          300: "#adb78b",
          400: "#8e9a67",
          500: "#737e4d",
          600: "#5c653c",
          700: "#4a5132",
          800: "#3d422b",
          900: "#353826",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
