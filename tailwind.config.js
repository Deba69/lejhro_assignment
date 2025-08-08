/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lejhro-orange': 'hsl(31 92% 56%)',
        'lejhro-orange-dark': 'hsl(31 92% 46%)',
        'lejhro-orange-light': 'hsl(31 92% 66%)',
      },
    },
  },
  plugins: [],
}
