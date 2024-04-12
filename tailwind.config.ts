import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        'green': {
          'soft': '#b9d7a8',
          'bright':'#407922'
        },
        'text': {
          'light': '#ffffff',
          'dark':'#407922'
        },
        'red': '#e86a74',
        'red-soft':'#e3918d',
        'red-bright':'#e0202c'
      },
    },
  },
  plugins: [],
};
export default config;
