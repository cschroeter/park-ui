import { defineSemanticTokens } from '@pandacss/dev'

export const teal = defineSemanticTokens.colors({
  '1': { value: { _light: '#fafefd', _dark: '#0d1514' } },
  '2': { value: { _light: '#f3fbf9', _dark: '#111c1b' } },
  '3': { value: { _light: '#e0f8f3', _dark: '#0d2d2a' } },
  '4': { value: { _light: '#ccf3ea', _dark: '#023b37' } },
  '5': { value: { _light: '#b8eae0', _dark: '#084843' } },
  '6': { value: { _light: '#a1ded2', _dark: '#145750' } },
  '7': { value: { _light: '#83cdc1', _dark: '#1c6961' } },
  '8': { value: { _light: '#53b9ab', _dark: '#207e73' } },
  '9': { value: { _light: '#12a594', _dark: '#12a594' } },
  '10': { value: { _light: '#0d9b8a', _dark: '#0eb39e' } },
  '11': { value: { _light: '#008573', _dark: '#0bd8b6' } },
  '12': { value: { _light: '#0d3d38', _dark: '#adf0dd' } },
  a1: { value: { _light: '#00cc9905', _dark: '#00deab05' } },
  a2: { value: { _light: '#00aa800c', _dark: '#12fbe60c' } },
  a3: { value: { _light: '#00c69d1f', _dark: '#00ffe61e' } },
  a4: { value: { _light: '#00c39633', _dark: '#00ffe92d' } },
  a5: { value: { _light: '#00b49047', _dark: '#00ffea3b' } },
  a6: { value: { _light: '#00a6855e', _dark: '#1cffe84b' } },
  a7: { value: { _light: '#0099807c', _dark: '#2efde85f' } },
  a8: { value: { _light: '#009783ac', _dark: '#32ffe775' } },
  a9: { value: { _light: '#009e8ced', _dark: '#13ffe49f' } },
  a10: { value: { _light: '#009684f2', _dark: '#0dffe0ae' } },
  a11: { value: { _light: '#008573', _dark: '#0afed5d6' } },
  a12: { value: { _light: '#00332df2', _dark: '#b8ffebef' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.teal.9}', _dark: '{colors.teal.9}' } },
      hover: { value: { _light: '{colors.teal.10}', _dark: '{colors.teal.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.teal.a3}', _dark: '{colors.teal.a3}' } },
      hover: { value: { _light: '{colors.teal.a4}', _dark: '{colors.teal.a4}' } },
      active: { value: { _light: '{colors.teal.a5}', _dark: '{colors.teal.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.teal.a11}', _dark: '{colors.teal.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.teal.a2}', _dark: '{colors.teal.a2}' } },
      active: { value: { _light: '{colors.teal.a3}', _dark: '{colors.teal.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.teal.a6}', _dark: '{colors.teal.a6}' } },
      hover: { value: { _light: '{colors.teal.a7}', _dark: '{colors.teal.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.teal.a11}', _dark: '{colors.teal.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.teal.a2}', _dark: '{colors.teal.a2}' } },
      active: { value: { _light: '{colors.teal.a3}', _dark: '{colors.teal.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.teal.a7}', _dark: '{colors.teal.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.teal.a11}', _dark: '{colors.teal.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.teal.a3}', _dark: '{colors.teal.a3}' } },
      active: { value: { _light: '{colors.teal.a4}', _dark: '{colors.teal.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.teal.a11}', _dark: '{colors.teal.a11}' } } },
  },
})
