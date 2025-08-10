/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary-color)',
        'secondary-dark': 'var(--secondary-dark)',
      },
    },
  },
  plugins: [],
}
