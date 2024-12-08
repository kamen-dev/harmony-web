/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,html,hbs}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      'serif': ['Playfair Display', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      keyframes: {
        randomFloat: {
          '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -20px) scale(0.9) rotate(5deg)' },
          '50%': { transform: 'translate(-30px, -30px) scale(0.75) rotate(-5deg)' },
          '75%': { transform: 'translate(20px, -10px) scale(1.1) rotate(3deg)' },
          '100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
        },
      },
      animation: {
        randomFloat: 'randomFloat 25s ease-in-out infinite', // Random floating animation
      },
    }
  },
  plugins: [],
}

