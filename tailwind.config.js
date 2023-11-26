/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_sm: "url('/src/assets/images/bg_small.jpg')",
        hero_md: "url('/src/assets/images/bg_md.jpg')",
        hero_lg: "url('/src/assets/images/bg_large.jpg')",
      },
      fontFamily: {
        noto: ['Noto Serif Georgian', 'serif'],
      },
    },
  },
  plugins: [],
};
