/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        light: 'url("/src/assets/orangeGreen.png")', // Define light mode background image
        dark: 'url("/src/assets/banner-bg.png")', // Define dark mode background image
        contact_light: 'url("/src/assets/illustration-dark.svg")',
        contact_dark: 'url("/src/assets/contact-img.svg")',
        project_color_dark1: 'url("/src/assets/color-sharp.png")',
        project_color_dark2: 'url("/src/assets/color-sharp2.png")',
      },

      fontFamily: {
        burtons: ['burtons', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        klee_one: ['klee-one', 'cursive'],
        cursive: 'cursive',
        // centraNo2_Medium: ['CentraNo2-Medium'],
        centraNo2_Book: ['centrano2-book', 'cursive'],
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
