/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['ArchivoBlack-Regular', 'sans'], // Replace 'CustomFont' with your font name
      },
    },
  },
  plugins: [],
}

