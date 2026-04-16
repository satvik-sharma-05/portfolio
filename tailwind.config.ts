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
                // STRICT COLOR SYSTEM - Only these 3 colors
                primary: "#ff6b00",      // Orange - accents, highlights
                dark: "#0a0a0a",         // Black - backgrounds
                light: "#ffffff",        // White - text, icons

                // Shades for layering (derived from main colors)
                black: {
                    DEFAULT: "#0a0a0a",
                    light: "#141414",
                    lighter: "#1a1a1a",
                },
                orange: {
                    DEFAULT: "#ff6b00",
                    light: "#ff8533",
                    dark: "#cc5500",
                },
                white: {
                    DEFAULT: "#ffffff",
                    muted: "rgba(255, 255, 255, 0.7)",
                    subtle: "rgba(255, 255, 255, 0.5)",
                },

                // Semantic colors (using main palette)
                background: "#0a0a0a",
                foreground: "#ffffff",
                accent: "#ff6b00",
                muted: "rgba(255, 255, 255, 0.5)",
                border: "rgba(255, 107, 0, 0.2)",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
                "scale-in": "scaleIn 0.3s ease-out",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px #ff6b00, 0 0 10px #ff6b00" },
                    "100%": { boxShadow: "0 0 20px #ff6b00, 0 0 40px #ff6b00" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.95)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
            boxShadow: {
                'orange': '0 0 20px rgba(255, 107, 0, 0.3)',
                'orange-lg': '0 0 40px rgba(255, 107, 0, 0.4)',
                'orange-xl': '0 0 60px rgba(255, 107, 0, 0.5)',
            },
        },
    },
    plugins: [],
};
export default config;
