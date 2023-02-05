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
        'bright-grey': '#EFEFEF',
        'ghost-white': '#F9F9F9',
        'dark-silver': '#707070',
        'dark-liver': '#515151',
        beaver: '#A18A68'
      }
    }
  }
}
