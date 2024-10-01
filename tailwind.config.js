/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '30px',
      },
      colors:{
        red:{
          dark: '#F43F5E',
          light: '#FFE5E9'
        },
        green:{
          dark: '#14B8A6',
          light: '#D2FBF2',
        },
        blue:{
          dark: '#151F31',
          light: '#1E293B',
        },
        gray:{
          dark: '#5C6679',
          light: '#F1F5F9'
        },
        gold:{
          dark: '#F6A825',
          light: '#FFF5CD'
        }
      },
      fontFamily: {
        'figtree': ['Figtree-400', 'Figtree-600', 'Figtree-700'],
      }
    },
  },
  plugins: [],
}

