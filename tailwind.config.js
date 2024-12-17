/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4B43',
        warrior: '#E6F3F0',
        mother: '#FFE6E6',
        magician: '#F3E6F0',
        oracle: '#E6E6F0',
      },
      fontFamily: {
        serif: ['CMU Serif', 'serif'],
        sans: ['Mulish', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-button': 'linear-gradient(135deg, #FACCCC, #E05E5F, #98D2CC, #0F2D32)',
      },
    },
  },
  plugins: [],
};
