/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        resize: {
          '0%, 100%': { width: '50%' },
          '50%': { width: '200px' },
        },
        resizeLeft: {
          '0%, 100%': { width: '50%' },
          '50%': {width:'200px', transform: 'translateX(200px)' }, 
        },
      },
      animation: {
        resize: 'resize 3s infinite',
        resizeLeft : 'resizeLeft 3s infinite'
      },
    },
    fontFamily:{
      lexend : ['Lexend', 'sans-serif'],
      kronaOne : ['Krona One', 'sans-serif']
    }
  },
  plugins: [],
}

