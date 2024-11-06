import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: "#282A36",
        current: "#F8F8F2",
        selection: "#44475A",
        foreground: "#F8F8F2",
        comment: "#6272A4",
        cyan: "#8BE9FD",
        green: "#50FA7B",
        orange: "#FFB86C",
        pink: "#FF79C6",
        purple: "#BD93F9",
        red: "#FF5555",
        yellow: "#F1FA8C",
      },
    },
  },
  plugins: [],
};

export default config;
