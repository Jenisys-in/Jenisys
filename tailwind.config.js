/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  ],
  theme: {
    screens: {
      'min':'393px',
      'pm':'430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      
      // => @media (min-width: 640px) { ... }

      
      // => @media (min-width: 1024px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'purple': '#361CA9',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #5A54A4, #2D248F)',
      },
      letterSpacing: {
        'negative-3': '-0.03em', // -3% letter spacing
      },
      lineHeight: {
        '120': '1.2', // 120% line height
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}