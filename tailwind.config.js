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
        accent: '#A18A68'
      }
    }
  }
}
