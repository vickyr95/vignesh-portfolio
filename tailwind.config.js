/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        light: 'url("/src/assets/images/wb_bg.jpg")', // light mode background image
        dark: 'url("/src/assets/images/banner-bg.png")', // dark mode background image
        contact_light: 'url("/src/assets/images/illustration-dark.svg")',
        contact_dark: 'url("/src/assets/images/contact-img.svg")',
      },

      fontFamily: {
        burtons: ['burtons', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        klee_one: ['klee-one', 'cursive'],
        cursive: 'cursive',
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
