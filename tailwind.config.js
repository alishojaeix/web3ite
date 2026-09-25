/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Web3ite Design System
        bg: {
          void: "#050608",
          panel: "#0b0d10",
          card: "#111317",
          hover: "#181b20",
          input: "#0e1014",
        },

        void: {
          DEFAULT: "#07080b",
          panel: "#0b0d11",
          card: "#111318",
          hover: "#181b20",
          input: "#0e1014",
        },

        text: {
          primary: "#fafafa",
          secondary: "#b8bcc8",
          muted: "#7a808d",
          disabled: "#4a4f5a",
        },

        accent: {
          DEFAULT: "#00d4ff",
          hover: "#00e5ff",
          muted: "rgba(0,212,255,0.12)",
          ring: "rgba(0,212,255,0.35)",
        },

        success: {
          DEFAULT: "#10b981",
          muted: "rgba(16,185,129,0.15)",
        },

        warning: {
          DEFAULT: "#f59e0b",
          muted: "rgba(245,158,11,0.15)",
        },

        danger: {
          DEFAULT: "#ef4444",
          muted: "rgba(239,68,68,0.15)",
        },

        border: {
          subtle: "rgba(255,255,255,0.04)",
          standard: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
          accent: "rgba(0,212,255,0.4)",
        },
      },

      fontFamily: {
        display: [
          "var(--font-display)",
          "Bricolage Grotesk",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "Source Sans 3",
          "system-ui",
          "sans-serif",
        ],
        geist: [
          "var(--font-body)",
          "Source Sans 3",
          "system-ui",
          "sans-serif",
        ],
        "geist-mono": [
          "ui-monospace",
          "monospace",
        ],
      },

      fontSize: {
        hero: [
          "64px",
          {
            lineHeight: "1.02",
            letterSpacing: "-0.04em",
            fontWeight: "300",
          },
        ],

        "display-lg": [
          "48px",
          {
            lineHeight: "1.05",
            letterSpacing: "-0.03em",
            fontWeight: "300",
          },
        ],

        "display-md": [
          "36px",
          {
            lineHeight: "1.10",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],

        h1: [
          "30px",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.015em",
            fontWeight: "400",
          },
        ],

        h2: [
          "24px",
          {
            lineHeight: "1.20",
            fontWeight: "500",
          },
        ],

        h3: [
          "20px",
          {
            lineHeight: "1.30",
            fontWeight: "500",
          },
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "1.60",
          },
        ],

        body: [
          "16px",
          {
            lineHeight: "1.55",
          },
        ],

        "body-sm": [
          "14px",
          {
            lineHeight: "1.50",
          },
        ],

        caption: [
          "13px",
          {
            lineHeight: "1.45",
          },
        ],

        label: [
          "12px",
          {
            lineHeight: "1.40",
            letterSpacing: "0.01em",
            fontWeight: "500",
          },
        ],

        micro: [
          "11px",
          {
            lineHeight: "1.35",
            letterSpacing: "0.02em",
          },
        ],

        button: [
          "14px",
          {
            lineHeight: "1",
            fontWeight: "500",
          },
        ],

        "button-lg": [
          "16px",
          {
            lineHeight: "1",
            fontWeight: "500",
          },
        ],

        code: [
          "13px",
          {
            lineHeight: "1.65",
          },
        ],
      },

      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        32: "128px",
      },

      borderRadius: {
        none: "0",
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.4)",

        md:
          "0 4px 12px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.03)",

        lg:
          "0 12px 32px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.04)",

        xl:
          "0 24px 64px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.05)",

        accent:
          "0 0 0 1px rgba(0,212,255,0.35),0 8px 32px rgba(0,212,255,0.15)",
      },

      animation: {
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s infinite",
      },

      keyframes: {
        "pulse-slow": {
          "0%,100%": {
            opacity: "0.3",
            transform: "scale(1)",
          },

          "50%": {
            opacity: "0.1",
            transform: "scale(1.05)",
          },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0) rotate(0deg)",
          },

          "50%": {
            transform: "translateY(-10px) rotate(5deg)",
          },
        },

        "bounce-slow": {
          "0%,20%,50%,80%,100%": {
            transform: "translateY(0)",
          },

          "40%": {
            transform: "translateY(-10px)",
          },

          "60%": {
            transform: "translateY(-5px)",
          },
        },
      },
    },
  },

  plugins: [],
};