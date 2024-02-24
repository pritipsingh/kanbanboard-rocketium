/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-red-100', 'bg-green-100', 'bg-blue-100', 'bg-yellow-100', 
    'bg-orange-100', 'bg-purple-100', 'bg-pink-100', 'bg-cyan-300'
    // Add any other dynamic classes you generate in a similar manner
  ],
  theme: {
    extend: {
      fontFamily : {
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

