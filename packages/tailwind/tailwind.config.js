const { parkwindPlugin } = require('./dist')

module.exports = {
  plugins: [parkwindPlugin],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'], // TODO dark mode switcher
}
