import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        muted: "#8e8e8e",
        pill: {
          dark: "#28282a",
          hover: "#323234",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        display: ["BubbledotICG-FinePos", "Geist Pixel Circle", "monospace"],
      },
      animation: {
        "slide-down": "slideDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "headline-fade": "headlineFade 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "reveal": "reveal 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-glow": "pulseGlow 3s infinite ease-in-out",
      },
      keyframes: {
        slideDown: {
          from: { opacity: "0", transform: "translateY(-18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        headlineFade: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          to: { opacity: "1", transform: "translateY(0) scale(1)", filter: "blur(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
