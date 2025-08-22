import { definePlugin, definePreset } from '@pandacss/dev'
import { recipes, slotRecipes } from './recipes'
import { blue } from './theme/colors/blue'
import { neutral } from './theme/colors/neutral'

export const preset = definePreset({
  name: '@park-ui/preset',
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  theme: {
    extend: {
      recipes,
      slotRecipes,
      semanticTokens: {
        colors: {
          gray: neutral,
          blue,
        },
      },
    },
  },
  staticCss: {
    recipes: '*',
  },
})

export const plugin = definePlugin({
  name: 'Kill Colors',
  hooks: {
    'preset:resolved': ({ utils, preset, name }) => {
      if (name === '@pandacss/preset-panda') {
        return utils.omit(preset, ['theme.tokens.colors', 'theme.semanticTokens.colors'])
      }
      return preset
    },
  },
})
