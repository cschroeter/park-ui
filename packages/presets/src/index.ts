import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { keyframes } from './keyframes'
import { recipes } from './recipes'
import { semanticTokens } from './semantic-tokens'
import { textStyles } from './text-styles'
import { tokens } from './tokens'

const preset: Preset = definePreset({
  theme: {
    extend: {
      recipes,
      keyframes,
      semanticTokens,
      textStyles,
      tokens,
    },
  },
  conditions,
  globalCss,
})

export default preset
