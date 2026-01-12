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
        cyber: {
          bg: '#0B0F1A',      // Darkest Blue/Black
          card: '#111827',    // Card BG
          primary: '#6D28D9', // Purple
          accent: '#22D3EE',  // Cyan/Neon
          text: '#E5E7EB',    // Gray-200
          muted: '#9CA3AF',   // Gray-400
        }
      },
      fontFamily: {
        display: ['var(--font-display)'], 
        sans: ['var(--font-inter)'],      
        mono: ['var(--font-jetbrains)'], 
      },
    },
  },
  plugins: [],
};

export default config;