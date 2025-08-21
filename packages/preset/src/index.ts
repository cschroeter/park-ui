import { definePlugin, definePreset } from '@pandacss/dev'
import { gold } from './theme/colors/gold'
import { neutral } from './theme/colors/neutral'
import { recipes, slotRecipes } from './theme/recipes'

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
          gold,
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
