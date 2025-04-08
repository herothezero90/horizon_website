/* global require, module */
const daisyui = require('daisyui');

module.exports = {
  content: [
    './*.html',
    './**/*.html',
    './*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        phudu: ['Phudu', 'sans-serif'],
        onest: ['Onest', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.phudu'),
              fontWeight: '700',
              fontSize: theme('fontSize.5xl'),
            },
            h2: {
              fontFamily: theme('fontFamily.phudu'),
              fontWeight: '400',
              fontSize: theme('fontSize.3xl'),
            },
            p: {
              fontFamily: theme('fontFamily.onest'),
              fontWeight: '400',
              fontSize: theme('fontSize.base'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    daisyui,
    require('@tailwindcss/typography'),
    require('tailwindcss-animated')
  ],
  daisyui: {
    themes: ['lofi', 'black'],
  },
};