import { defineSemanticTokens } from '@pandacss/dev'

export const yellow = defineSemanticTokens.colors({
  '1': { value: { _light: '#fdfdf9', _dark: '#14120b' } },
  '2': { value: { _light: '#fefce9', _dark: '#1b180f' } },
  '3': { value: { _light: '#fffab8', _dark: '#2d2305' } },
  '4': { value: { _light: '#fff394', _dark: '#362b00' } },
  '5': { value: { _light: '#ffe770', _dark: '#433500' } },
  '6': { value: { _light: '#f3d768', _dark: '#524202' } },
  '7': { value: { _light: '#e4c767', _dark: '#665417' } },
  '8': { value: { _light: '#d5ae39', _dark: '#836a21' } },
  '9': { value: { _light: '#ffe629', _dark: '#ffe629' } },
  '10': { value: { _light: '#ffdc00', _dark: '#ffff57' } },
  '11': { value: { _light: '#9e6c00', _dark: '#f5e147' } },
  '12': { value: { _light: '#473b1f', _dark: '#f6eeb4' } },
  a1: { value: { _light: '#aaaa0006', _dark: '#d1510004' } },
  a2: { value: { _light: '#f4dd0016', _dark: '#f9b4000b' } },
  a3: { value: { _light: '#ffee0047', _dark: '#ffaa001e' } },
  a4: { value: { _light: '#ffe3016b', _dark: '#fdb70028' } },
  a5: { value: { _light: '#ffd5008f', _dark: '#febb0036' } },
  a6: { value: { _light: '#ebbc0097', _dark: '#fec40046' } },
  a7: { value: { _light: '#d2a10098', _dark: '#fdcb225c' } },
  a8: { value: { _light: '#c99700c6', _dark: '#fdca327b' } },
  a9: { value: { _light: '#ffe100d6', _dark: '#ffe629' } },
  a10: { value: { _light: '#ffdc00', _dark: '#ffff57' } },
  a11: { value: { _light: '#9e6c00', _dark: '#fee949f5' } },
  a12: { value: { _light: '#2e2000e0', _dark: '#fef6baf6' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.yellow.9}', _dark: '{colors.yellow.9}' } },
      hover: { value: { _light: '{colors.yellow.10}', _dark: '{colors.yellow.10}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.1}' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.yellow.a3}', _dark: '{colors.yellow.a3}' } },
      hover: { value: { _light: '{colors.yellow.a4}', _dark: '{colors.yellow.a4}' } },
      active: { value: { _light: '{colors.yellow.a5}', _dark: '{colors.yellow.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.yellow.a11}', _dark: '{colors.yellow.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.yellow.a2}', _dark: '{colors.yellow.a2}' } },
      active: { value: { _light: '{colors.yellow.a3}', _dark: '{colors.yellow.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.yellow.a6}', _dark: '{colors.yellow.a6}' } },
      hover: { value: { _light: '{colors.yellow.a7}', _dark: '{colors.yellow.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.yellow.a11}', _dark: '{colors.yellow.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.yellow.a2}', _dark: '{colors.yellow.a2}' } },
      active: { value: { _light: '{colors.yellow.a3}', _dark: '{colors.yellow.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.yellow.a7}', _dark: '{colors.yellow.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.yellow.a11}', _dark: '{colors.yellow.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.yellow.a3}', _dark: '{colors.yellow.a3}' } },
      active: { value: { _light: '{colors.yellow.a4}', _dark: '{colors.yellow.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.yellow.a11}', _dark: '{colors.yellow.a11}' } } },
  },
})
