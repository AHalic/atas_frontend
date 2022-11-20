/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'custom-light-white': '#F5F5F5',
      'custom-light-gray': '#E4E6F0',
      'custom-dark-gray': '#7B7B7B',
      'custom-light-blue': '#4FC3F7',
    },
    fontFamily: {
      'sans': ['"Open Sans"', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}