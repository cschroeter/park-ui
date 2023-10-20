import plugin from 'tailwindcss/plugin'
import preset from './preset'

export const parkwindPlugin = plugin(({ addComponents }) => {
  const styles = require('./css/styles.json')
  addComponents(styles)
}, preset)
