/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4bfa95',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};