/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // For the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // For all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': 'rgb(232, 255, 0)',
        'custom-red': 'rgba(255, 58, 58, 1)',
        'custom-orange': 'rgba(252, 176, 69, 1)',
      },
    },
  },
  plugins: [],
};
