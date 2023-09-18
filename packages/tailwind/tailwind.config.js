const { parkwindPlugin } = require('./src/plugin')

module.exports = {
  plugins: [parkwindPlugin],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
}
