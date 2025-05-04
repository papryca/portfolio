import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up-scale': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-up-scale': 'fade-up-scale 1s ease-out forwards',
      },
    },
    screens: {
      xm: '320px',
      sm: '570px',
      md: '1130px',
      lg: '1300px',
      xl: '1440px',
    },
    boxShadow: {
      deep: ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    },
    backgroundColor: {
      'page-background-light': '#F6F6FE',
      'page-background-dark': '#000000',
      'page-background-grey': '#2a2626',
      'red': '#be5845',
    },
    colors: {
      'red': '#be5845',
      'gray': {
        dark: '#4A4A4A',
        soft: '#999999',
      },
      text: '#333',
    },
  },
  plugins: [],
};

export default config;

