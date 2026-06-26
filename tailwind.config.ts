import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — from provided colorPallet.pdf
        "arctic-powder": "#F1F6F4",
        "mystic-mint": "#D9E8E2",
        forsythia: "#FFC801",
        "deep-saffron": "#FF9932",
        "nocturnal-expedition": "#114C5A",
        "oceanic-noir": "#172B36",
        // Semantic aliases used throughout components
        void: "#172B36",
        midnight: "#114C5A",
        surface: "#1B3540",
        card: "#1F3D48",
        border: "#2A4D58",
        accent: "#FFC801",
        "accent-bright": "#FFD84D",
        "accent-glow": "#FF9932",
        cyan: "#D9E8E2",
        "cyan-dim": "#B8D4CB",
        magenta: "#FF9932",
        lime: "#FFC801",
        muted: "#5A7A82",
        subtle: "#7E9BA2",
        text: "#F1F6F4",
        "text-dim": "#C5D6D1",
        "text-faint": "#8AA5AB",
      },
      fontFamily: {
        display: ["'JetBrains Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.3s ease-out forwards",
        pulse: "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
