import { defineSemanticTokens } from '@pandacss/dev'

export const violet = defineSemanticTokens.colors({
  '1': { value: { _light: '#fdfcfe', _dark: '#14121f' } },
  '2': { value: { _light: '#faf8ff', _dark: '#1b1525' } },
  '3': { value: { _light: '#f4f0fe', _dark: '#291f43' } },
  '4': { value: { _light: '#ebe4ff', _dark: '#33255b' } },
  '5': { value: { _light: '#e1d9ff', _dark: '#3c2e69' } },
  '6': { value: { _light: '#d4cafe', _dark: '#473876' } },
  '7': { value: { _light: '#c2b5f5', _dark: '#56468b' } },
  '8': { value: { _light: '#aa99ec', _dark: '#6958ad' } },
  '9': { value: { _light: '#6e56cf', _dark: '#6e56cf' } },
  '10': { value: { _light: '#654dc4', _dark: '#7d66d9' } },
  '11': { value: { _light: '#6550b9', _dark: '#baa7ff' } },
  '12': { value: { _light: '#2f265f', _dark: '#e2ddfe' } },
  a1: { value: { _light: '#5500aa03', _dark: '#4422ff0f' } },
  a2: { value: { _light: '#4900ff07', _dark: '#853ff916' } },
  a3: { value: { _light: '#4400ee0f', _dark: '#8354fe36' } },
  a4: { value: { _light: '#4300ff1b', _dark: '#7d51fd50' } },
  a5: { value: { _light: '#3600ff26', _dark: '#845ffd5f' } },
  a6: { value: { _light: '#3100fb35', _dark: '#8f6cfd6d' } },
  a7: { value: { _light: '#2d01dd4a', _dark: '#9879ff83' } },
  a8: { value: { _light: '#2b00d066', _dark: '#977dfea8' } },
  a9: { value: { _light: '#2400b7a9', _dark: '#8668ffcc' } },
  a10: { value: { _light: '#2300abb2', _dark: '#9176fed7' } },
  a11: { value: { _light: '#1f0099af', _dark: '#baa7ff' } },
  a12: { value: { _light: '#0b0043d9', _dark: '#e3defffe' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.violet.9}', _dark: '{colors.violet.9}' } },
      hover: { value: { _light: '{colors.violet.10}', _dark: '{colors.violet.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.violet.a3}', _dark: '{colors.violet.a3}' } },
      hover: { value: { _light: '{colors.violet.a4}', _dark: '{colors.violet.a4}' } },
      active: { value: { _light: '{colors.violet.a5}', _dark: '{colors.violet.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.violet.a11}', _dark: '{colors.violet.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.violet.a2}', _dark: '{colors.violet.a2}' } },
      active: { value: { _light: '{colors.violet.a3}', _dark: '{colors.violet.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.violet.a6}', _dark: '{colors.violet.a6}' } },
      hover: { value: { _light: '{colors.violet.a7}', _dark: '{colors.violet.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.violet.a11}', _dark: '{colors.violet.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.violet.a2}', _dark: '{colors.violet.a2}' } },
      active: { value: { _light: '{colors.violet.a3}', _dark: '{colors.violet.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.violet.a7}', _dark: '{colors.violet.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.violet.a11}', _dark: '{colors.violet.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.violet.a3}', _dark: '{colors.violet.a3}' } },
      active: { value: { _light: '{colors.violet.a4}', _dark: '{colors.violet.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.violet.a11}', _dark: '{colors.violet.a11}' } } },
  },
})
