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
      divideColor: ['dark'],
      boxShadow: ['dark'],
      placeholderColor: ['dark'],
      ringColor: ['dark'],
      ringOffsetColor: ['dark'],
      ringOffsetWidth: ['dark'],
      ringOpacity: ['dark'],
      ringWidth: ['dark'],
      fill: ['hover', 'focus'],
      stroke: ['hover', 'focus'],
      gradientColorStops: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
      scale: ['hover', 'active'],
      rotate: ['hover', 'active'], // enable hover and active variants for rotation values
      translate: ['hover', 'active'],
      skew: ['hover', 'active'],
      transitionProperty: ['hover', 'focus'],
      outline: ['focus'],
    }
  },
}
