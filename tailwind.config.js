/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
      divideColor: ['dark'], // enable the dark variant for dividing line colors
      boxShadow: ['dark'], // enable the dark variant for box shadows
      placeholderColor: ['dark'], // enable the dark variant for placeholder text colors
      ringColor: ['dark'], // enable the dark variant for ring colors
      ringOffsetColor: ['dark'], // enable the dark variant for ring offset colors
      ringOffsetWidth: ['dark'], // enable the dark variant for ring offset widths
      ringOpacity: ['dark'], // enable the dark variant for ring opacity
      ringWidth: ['dark'], // enable the dark variant for ring widths
      fill: ['hover', 'focus'], // enable hover and focus variants for SVG fill colors
      stroke: ['hover', 'focus'], // enable hover and focus variants for SVG stroke colors
      gradientColorStops: ['hover', 'focus'], // enable hover and focus variants for gradient color stops
      zIndex: ['hover', 'active'], // enable hover and active variants for z-index values
      scale: ['hover', 'active'], // enable hover and active variants for scale values
      rotate: ['hover', 'active'], // enable hover and active variants for rotation values
      translate: ['hover', 'active'],
      skew: ['hover', 'active'],
      transitionProperty: ['hover', 'focus'],
      outline: ['focus'],
    }
  },
}
