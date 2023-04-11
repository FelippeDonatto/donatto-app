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
        600: '#0488B0',
        500: '#05BAEF',
        400: '#05C3FC'
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent'
    },

    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '4xl': 40,
      '5xl': 48,
      '6xl': 64
    },
    extend: {}
  },
  plugins: []
}
