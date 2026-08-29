import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0A0A1B",
          surface: "#12122A",
          surface2: "#181834",
          border: "rgba(255,255,255,0.09)",
          borderHover: "rgba(255,255,255,0.18)",
        },
        ink: {
          primary: "#F5F4FF",
          secondary: "#AFACD1",
          muted: "#6B6890",
        },
        accent: {
          DEFAULT: "#A855F7",
          soft: "#C084FC",
          dim: "#6B21A8",
        },
        signal: {
          indigo: "#6366F1",
          violet: "#A855F7",
          pink: "#EC4899",
          blue: "#3B82F6",
          cyan: "#22D3EE",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(139,92,246,0.22), transparent)",
        "brand-gradient":
          "linear-gradient(135deg, #6366F1 0%, #A855F7 45%, #EC4899 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(99,102,241,0.16) 0%, rgba(168,85,247,0.16) 50%, rgba(236,72,153,0.16) 100%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-16px) translateX(6px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.06)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.96)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        blob: "blob 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
