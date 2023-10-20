const { parkwindPlugin } = require('./dist')

module.exports = {
  plugins: [parkwindPlugin],
  parkUI: {
    accentColor: 'neutral',
    grayColor: 'neutral',
    borderRadius: 'md',
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'], // TODO dark mode switcher
}
