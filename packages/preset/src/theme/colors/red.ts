import { defineSemanticTokens } from '@pandacss/dev'

export const red = defineSemanticTokens.colors({
  '1': { value: { _light: '#fffcfc', _dark: '#191111' } },
  '2': { value: { _light: '#fff7f7', _dark: '#201314' } },
  '3': { value: { _light: '#feebec', _dark: '#3b1219' } },
  '4': { value: { _light: '#ffdbdc', _dark: '#500f1c' } },
  '5': { value: { _light: '#ffcdce', _dark: '#611623' } },
  '6': { value: { _light: '#fdbdbe', _dark: '#72232d' } },
  '7': { value: { _light: '#f4a9aa', _dark: '#8c333a' } },
  '8': { value: { _light: '#eb8e90', _dark: '#b54548' } },
  '9': { value: { _light: '#e5484d', _dark: '#e5484d' } },
  '10': { value: { _light: '#dc3e42', _dark: '#ec5d5e' } },
  '11': { value: { _light: '#ce2c31', _dark: '#ff9592' } },
  '12': { value: { _light: '#641723', _dark: '#ffd1d9' } },
  a1: { value: { _light: '#ff000003', _dark: '#f4121209' } },
  a2: { value: { _light: '#ff000008', _dark: '#f22f3e11' } },
  a3: { value: { _light: '#f3000d14', _dark: '#ff173f2d' } },
  a4: { value: { _light: '#ff000824', _dark: '#fe0a3b44' } },
  a5: { value: { _light: '#ff000632', _dark: '#ff204756' } },
  a6: { value: { _light: '#f8000442', _dark: '#ff3e5668' } },
  a7: { value: { _light: '#df000356', _dark: '#ff536184' } },
  a8: { value: { _light: '#d2000571', _dark: '#ff5d61b0' } },
  a9: { value: { _light: '#db0007b7', _dark: '#fe4e54e4' } },
  a10: { value: { _light: '#d10005c1', _dark: '#ff6465eb' } },
  a11: { value: { _light: '#c40006d3', _dark: '#ff9592' } },
  a12: { value: { _light: '#55000de8', _dark: '#ffd1d9' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
      hover: { value: { _light: '{colors.red.10}', _dark: '{colors.red.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.red.a3}', _dark: '{colors.red.a3}' } },
      hover: { value: { _light: '{colors.red.a4}', _dark: '{colors.red.a4}' } },
      active: { value: { _light: '{colors.red.a5}', _dark: '{colors.red.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.red.a11}', _dark: '{colors.red.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.red.a2}', _dark: '{colors.red.a2}' } },
      active: { value: { _light: '{colors.red.a3}', _dark: '{colors.red.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.red.a6}', _dark: '{colors.red.a6}' } },
      hover: { value: { _light: '{colors.red.a7}', _dark: '{colors.red.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.red.a11}', _dark: '{colors.red.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.red.a2}', _dark: '{colors.red.a2}' } },
      active: { value: { _light: '{colors.red.a3}', _dark: '{colors.red.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.red.a7}', _dark: '{colors.red.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.red.a11}', _dark: '{colors.red.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.red.a3}', _dark: '{colors.red.a3}' } },
      active: { value: { _light: '{colors.red.a4}', _dark: '{colors.red.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.red.a11}', _dark: '{colors.red.a11}' } } },
  },
})
