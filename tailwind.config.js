/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        light: 'url("/src/assets/pngtree-image.jpg")', // Define light mode background image
        dark: 'url("/src/assets/banner-bg.png")', // Define dark mode background image
      },
      homebg: {
        homebgImage: 'url("/src/assets/pngtree-image.jpg")', // Define light mode background image
        homebgImagedark: 'url("/src/assets/banner-bg.png")', // Define dark mode background image
      },
      fontFamily: {
        burtons: ['burtons', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],

        fuggles: ['Fuggles', 'cursive'],
      },
    },

    animation: {
      blob: 'blob 7s infinite',
      pulse: 'pulse 5s infinite',
    },
    keyframes: {
      blob: {
        '0%': {
          transform: 'translate(0px, 0px) scale(1)',
        },
        '33%': {
          transform: 'translate(30px, -50px) scale(1.1)',
        },
        '66%': {
          transform: 'translate(-20px, 20px) scale(0.9)',
        },
        '100%': {
          transform: 'tranlate(0px, 0px) scale(1)',
        },
      },
    },
  },
  plugins: [],
};
