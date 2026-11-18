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
          DEFAULT: "#d4af7a",
          hover: "#f0d9a8",
          muted: "rgba(212,175,122,0.12)",
          ring: "rgba(212,175,122,0.35)",
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
          accent: "rgba(212,175,122,0.4)",
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
          "var(--type-hero)",
          {
            lineHeight: "var(--leading-hero)",
            letterSpacing: "var(--tracking-fa)",
            fontWeight: "600",
          },
        ],

        "display-lg": [
          "var(--type-hero)",
          {
            lineHeight: "var(--leading-hero)",
            letterSpacing: "var(--tracking-fa)",
            fontWeight: "600",
          },
        ],

        "display-md": [
          "var(--type-section)",
          {
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-fa)",
            fontWeight: "600",
          },
        ],

        h1: [
          "var(--type-section)",
          {
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-fa)",
            fontWeight: "600",
          },
        ],

        h2: [
          "var(--type-card)",
          {
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-fa)",
            fontWeight: "600",
          },
        ],

        h3: [
          "var(--type-card-sm)",
          {
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-fa)",
            fontWeight: "600",
          },
        ],

        "body-lg": [
          "var(--type-lead)",
          {
            lineHeight: "var(--leading-body)",
          },
        ],

        body: [
          "var(--type-body)",
          {
            lineHeight: "var(--leading-body)",
          },
        ],

        "body-sm": [
          "var(--type-secondary)",
          {
            lineHeight: "var(--leading-tight)",
          },
        ],

        caption: [
          "var(--type-meta)",
          {
            lineHeight: "var(--leading-tight)",
          },
        ],

        label: [
          "var(--type-meta)",
          {
            lineHeight: "1.5",
            letterSpacing: "var(--tracking-fa)",
            fontWeight: "500",
          },
        ],

        micro: [
          "var(--type-micro)",
          {
            lineHeight: "1.5",
            letterSpacing: "var(--tracking-fa)",
          },
        ],

        button: [
          "var(--type-button)",
          {
            lineHeight: "1.5",
            fontWeight: "500",
            letterSpacing: "var(--tracking-fa)",
          },
        ],

        "button-lg": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
            letterSpacing: "var(--tracking-fa)",
          },
        ],

        code: [
          "0.875rem",
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
          "0 0 0 1px rgba(212,175,122,0.35),0 8px 32px rgba(212,175,122,0.15)",
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