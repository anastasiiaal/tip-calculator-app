/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // if added here, will add to existing styles
      screens: { 
        '2xs': '300px',
        'xs': '375px',
      }
    },
    // if added here, will override/replace existing styles
    colors: { 
      'bg': '#C5E4E7',
      'active': '#9FE8DF',
      'primary': '#26C2AD',
      'dark': '#00474B',
      'heading': '#3E6465',
      'input-bg': '#F3F8FB',
      'grey-txt': '#637171',
      'error': '#B57B6D',
      'white': '#ffffff',
    }
  },
  plugins: [],
}
