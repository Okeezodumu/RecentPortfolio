const defaultTheme = require ("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffff',
      'black' : '#000'
    },

   
    fontFamily: {
      sans: ['"poppins"', ...defaultTheme.fontFamily.sans],
     
    },

    extend: {
      
     
    },

  },

  plugins: [],
}

