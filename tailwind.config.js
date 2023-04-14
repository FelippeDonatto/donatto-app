/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      gray: {
        950: '#09090a',
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        100: '#e1e1e6'
      },

      brand: {
        500: '#05BAEF',
        400: '#04A5D6'
      },

      white: '#ffffff',
      black: '#000000',

      transparent: 'transparent'
    },
    extend: {
      backgroundImage: {
        app: 'url(/background.png)',
        mobile: 'url(/mobile.png)'
      }
    }
  },
  plugins: []
}
