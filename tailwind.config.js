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
        silver: '#D8D8D8',
        accent: '#A18A68'
      }
    }
  }
}
