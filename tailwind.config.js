module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      colors: {
        'light-silver': '#D8D8D8',
        'dark-silver': '#707070',
        beaver: '#A18A68'
      }
    }
  }
}
