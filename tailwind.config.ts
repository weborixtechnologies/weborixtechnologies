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
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dexon: {
          green: "hsl(var(--dexon-green))",
          yellow: "hsl(var(--dexon-yellow))",
          cyan: "hsl(var(--dexon-cyan))",
          cream: "hsl(var(--dexon-cream))",
          dark: "hsl(var(--dexon-dark))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        float: { "0%,100%": { transform: "translateY(0px) rotate(0deg)" }, "50%": { transform: "translateY(-18px) rotate(3deg)" } },
        "float-slow": { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)", borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" },
          "33%": { transform: "translate(20px,-30px) scale(1.06)", borderRadius: "40% 60% 45% 55% / 55% 45% 60% 40%" },
          "66%": { transform: "translate(-25px,15px) scale(0.96)", borderRadius: "55% 45% 60% 40% / 45% 55% 50% 50%" },
        },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "marquee-rev": { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0)" } },
        spinslow: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "draw-line": { from: { strokeDashoffset: "1000" }, to: { strokeDashoffset: "0" } },
        wiggle: { "0%,100%": { transform: "rotate(-3deg)" }, "50%": { transform: "rotate(3deg)" } },
        "type-caret": { "50%": { opacity: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-rev": "marquee-rev 30s linear infinite",
        spinslow: "spinslow 22s linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 3s linear infinite",
        wiggle: "wiggle 1.2s ease-in-out infinite",
        "type-caret": "type-caret 1s steps(2) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
