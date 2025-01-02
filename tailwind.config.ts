import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/bg-hero.jpg')",
      },
      colors: {
        primary: "#ddd363",
        secondary: "#000000",
      },
      fontFamily: {
        title: ["var(--font-space-grotesk)"],
        nav: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
