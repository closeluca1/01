/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#19B6A7',
        secondary: '#1DDECB',
        dark: '#1F2933',
        gray: '#434C55',
        light: '#E8E9EA',
      }
    },
  },
  plugins: [],
}
