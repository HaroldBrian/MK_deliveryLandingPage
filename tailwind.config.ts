import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        // sm: "768px",
        // md: "992px",
        lg: "1200px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        // md: "1024px",
        // => @media (min-width: 1024px) { ... }

        // lg: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      colors: {
        primary: "#242a2b",
        secondary: "#808080",
        accent: {
          DEFAULT: "#003ecb",
          secondary: "#0057ff",
          tertiary: "#0C8AE4",
        },
        grey: "#e8f0f1",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        primary: "Poppins",
      },
      boxShadow: {
        custom1: "0px 2px 4px 0px rgba(8, 70, 78, 0.08)",
        custom2: "0px 0px 30px 0px rgba(8, 73, 81, 0.06)",
      },
      backgroundImage: {
        testimonials: "url(../public/assets/img/testimonials/bg.svg)",
        departments: "url(../public/assets/img/departments/bg.svg)",
        quoteLeft: "url(../public/assets/icons/testimonials/quote-left.svg)",
        quoteRight: "url(../public/assets/icons/testimonials/quote-right.svg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
