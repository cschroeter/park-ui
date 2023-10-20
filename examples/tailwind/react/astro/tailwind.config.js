const { parkwindPlugin } = require('@park-ui/tailwind-plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [parkwindPlugin],
  parkUI: {
    accentColor: 'neutral',
    grayColor: 'neutral',
    borderRadius: 'md',
  },
  darkMode: ['class'],
}
