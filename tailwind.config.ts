import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xm: '320px',
        sm: '570px',
        md: '1130px',
        lg: '1300px',
        xl: '1440px',
      },
      backgroundColor: {
        'page-background-light': '#F6F6FE',
        'page-background-dark': '#000000',
        'page-background-grey': '#2a2626',
      },
      colors: {
        'pink': '#fa2771',
        'yellow': '#fcae6f',
        'gray': {
          dark: '#4A4A4A',
          soft: '#999999',
        },
      },
    },
  },
  plugins: [],
};
export default config;
