/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
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