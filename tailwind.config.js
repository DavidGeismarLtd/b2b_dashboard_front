const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter, Sans-serif"],
      // serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screen:{
        lg: "1216px"
      }
    },
  },
    plugins: [
        require('flowbite/plugin'),
        plugin(function({ addUtilities }) {
          addUtilities({
            '.content-auto': {
              'content-visibility': 'auto',
            },
            '.content-hidden': {
              'content-visibility': 'hidden',
            },
            '.content-visible': {
              'content-visibility': 'visible',
            },
          })
        })
    ]
}