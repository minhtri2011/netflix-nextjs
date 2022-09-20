/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        17: "4.25rem",
      },
    },
    screens: {
      sm:'640px',
      md:'885px',
      lg: "950px",
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
