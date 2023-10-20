const { parkwindPlugin } = require('@park-ui/tailwind-plugin')

/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    parkwindPlugin,
  ],
  parkUI: {
    accentColor: 'neutral',
    grayColor: 'neutral',
    borderRadius: 'md',
  },
  darkMode: ['class'],
}
