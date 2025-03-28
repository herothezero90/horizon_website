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
        outfit: ['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.outfit'),
              fontWeight: '700',
              fontSize: theme('fontSize.5xl'),
            },
            h2: {
              fontFamily: theme('fontFamily.outfit'),
              fontWeight: '400',
              fontSize: theme('fontSize.3xl'),
            },
            p: {
              fontFamily: theme('fontFamily.roboto'),
              fontWeight: '400',
              fontSize: theme('fontSize.base'),
            },
          },
        },
      }),
    },
  },
  plugins: [daisyui, require('@tailwindcss/typography')],
  daisyui: {
    themes: ['lofi', 'black'],
  },
};