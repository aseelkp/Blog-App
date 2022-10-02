/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontFamily: {
        'quickSand': ['QuickSand', 'Quicksand']
      },
      extend: {
        boxShadow: {
          '3xl': '1px 3px 5px rgba(0,0,0,0.1)'
        }
      },
    },
    plugins: [],
  }
  