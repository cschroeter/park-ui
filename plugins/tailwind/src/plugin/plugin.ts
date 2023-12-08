import plugin from 'tailwindcss/plugin'
import preset from './preset'
import { getThemeCssVariables } from './theme-builder'

export const parkwindPlugin = plugin(({ addComponents, config }) => {
  const { parkUI: { accentColor = 'neutral', grayColor = 'neutral', borderRadius = 'md' } = {} } =
    config()

  const styles = require('./css/styles.json')
  styles[':root'] = {
    ...styles[':root'],
    ...getThemeCssVariables({ accentColor, grayColor, borderRadius }),
  }
  addComponents(styles)
}, preset)
