module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4B43',
        warrior: '#99D2CC',
        mother: '#FACCCC',
        magician: '#E15E5F',
        oracle: '#0F2D32',
      },
      fontFamily: {
        serif: ['CMU Serif', 'serif'],
        sans: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
