const plugin = require('tailwindcss/plugin')
const styles = require('./css/styles.json')
const preset = require('./preset')
delete styles['@layer reset']

const parkwindPlugin = plugin(({ addComponents }) => {
  addComponents(styles)
}, preset)

module.exports = {
  parkwindPlugin,
}
