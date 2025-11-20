import { defineSemanticTokens } from '@pandacss/dev'

export const green = defineSemanticTokens.colors({
  '1': { value: { _light: '#fbfefc', _dark: '#0e1512' } },
  '2': { value: { _light: '#f4fbf6', _dark: '#121b17' } },
  '3': { value: { _light: '#e6f6eb', _dark: '#132d21' } },
  '4': { value: { _light: '#d6f1df', _dark: '#113b29' } },
  '5': { value: { _light: '#c4e8d1', _dark: '#174933' } },
  '6': { value: { _light: '#adddc0', _dark: '#20573e' } },
  '7': { value: { _light: '#8eceaa', _dark: '#28684a' } },
  '8': { value: { _light: '#5bb98b', _dark: '#2f7c57' } },
  '9': { value: { _light: '#30a46c', _dark: '#30a46c' } },
  '10': { value: { _light: '#2b9a66', _dark: '#33b074' } },
  '11': { value: { _light: '#218358', _dark: '#3dd68c' } },
  '12': { value: { _light: '#193b2d', _dark: '#b1f1cb' } },
  a1: { value: { _light: '#00c04004', _dark: '#00de4505' } },
  a2: { value: { _light: '#00a32f0b', _dark: '#29f99d0b' } },
  a3: { value: { _light: '#00a43319', _dark: '#22ff991e' } },
  a4: { value: { _light: '#00a83829', _dark: '#11ff992d' } },
  a5: { value: { _light: '#019c393b', _dark: '#2bffa23c' } },
  a6: { value: { _light: '#00963c52', _dark: '#44ffaa4b' } },
  a7: { value: { _light: '#00914071', _dark: '#50fdac5e' } },
  a8: { value: { _light: '#00924ba4', _dark: '#54ffad73' } },
  a9: { value: { _light: '#008f4acf', _dark: '#44ffa49e' } },
  a10: { value: { _light: '#008647d4', _dark: '#43fea4ab' } },
  a11: { value: { _light: '#00713fde', _dark: '#46fea5d4' } },
  a12: { value: { _light: '#002616e6', _dark: '#bbffd7f0' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.green.9}', _dark: '{colors.green.9}' } },
      hover: { value: { _light: '{colors.green.10}', _dark: '{colors.green.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.green.a3}', _dark: '{colors.green.a3}' } },
      hover: { value: { _light: '{colors.green.a4}', _dark: '{colors.green.a4}' } },
      active: { value: { _light: '{colors.green.a5}', _dark: '{colors.green.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.green.a11}', _dark: '{colors.green.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.green.a2}', _dark: '{colors.green.a2}' } },
      active: { value: { _light: '{colors.green.a3}', _dark: '{colors.green.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.green.a6}', _dark: '{colors.green.a6}' } },
      hover: { value: { _light: '{colors.green.a7}', _dark: '{colors.green.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.green.a11}', _dark: '{colors.green.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.green.a2}', _dark: '{colors.green.a2}' } },
      active: { value: { _light: '{colors.green.a3}', _dark: '{colors.green.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.green.a7}', _dark: '{colors.green.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.green.a11}', _dark: '{colors.green.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.green.a3}', _dark: '{colors.green.a3}' } },
      active: { value: { _light: '{colors.green.a4}', _dark: '{colors.green.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.green.a11}', _dark: '{colors.green.a11}' } } },
  },
})
