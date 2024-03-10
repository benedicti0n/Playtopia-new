/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'raw': '(min-height: 550px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
 plugins: [require('daisyui'),
            require('tailwind-scrollbar'),]
}

