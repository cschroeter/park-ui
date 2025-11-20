import { defineSemanticTokens } from '@pandacss/dev'

export const orange = defineSemanticTokens.colors({
  '1': { value: { _light: '#fefcfb', _dark: '#17120e' } },
  '2': { value: { _light: '#fff7ed', _dark: '#1e160f' } },
  '3': { value: { _light: '#ffefd6', _dark: '#331e0b' } },
  '4': { value: { _light: '#ffdfb5', _dark: '#462100' } },
  '5': { value: { _light: '#ffd19a', _dark: '#562800' } },
  '6': { value: { _light: '#ffc182', _dark: '#66350c' } },
  '7': { value: { _light: '#f5ae73', _dark: '#7e451d' } },
  '8': { value: { _light: '#ec9455', _dark: '#a35829' } },
  '9': { value: { _light: '#f76b15', _dark: '#f76b15' } },
  '10': { value: { _light: '#ef5f00', _dark: '#ff801f' } },
  '11': { value: { _light: '#cc4e00', _dark: '#ffa057' } },
  '12': { value: { _light: '#582d1d', _dark: '#ffe0c2' } },
  a1: { value: { _light: '#c0400004', _dark: '#ec360007' } },
  a2: { value: { _light: '#ff8e0012', _dark: '#fe6d000e' } },
  a3: { value: { _light: '#ff9c0029', _dark: '#fb6a0025' } },
  a4: { value: { _light: '#ff91014a', _dark: '#ff590039' } },
  a5: { value: { _light: '#ff8b0065', _dark: '#ff61004a' } },
  a6: { value: { _light: '#ff81007d', _dark: '#fd75045c' } },
  a7: { value: { _light: '#ed6c008c', _dark: '#ff832c75' } },
  a8: { value: { _light: '#e35f00aa', _dark: '#fe84389d' } },
  a9: { value: { _light: '#f65e00ea', _dark: '#fe6d15f7' } },
  a10: { value: { _light: '#ef5f00', _dark: '#ff801f' } },
  a11: { value: { _light: '#cc4e00', _dark: '#ffa057' } },
  a12: { value: { _light: '#431200e2', _dark: '#ffe0c2' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.orange.9}', _dark: '{colors.orange.9}' } },
      hover: { value: { _light: '{colors.orange.10}', _dark: '{colors.orange.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.orange.a3}', _dark: '{colors.orange.a3}' } },
      hover: { value: { _light: '{colors.orange.a4}', _dark: '{colors.orange.a4}' } },
      active: { value: { _light: '{colors.orange.a5}', _dark: '{colors.orange.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.orange.a11}', _dark: '{colors.orange.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.orange.a2}', _dark: '{colors.orange.a2}' } },
      active: { value: { _light: '{colors.orange.a3}', _dark: '{colors.orange.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.orange.a6}', _dark: '{colors.orange.a6}' } },
      hover: { value: { _light: '{colors.orange.a7}', _dark: '{colors.orange.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.orange.a11}', _dark: '{colors.orange.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.orange.a2}', _dark: '{colors.orange.a2}' } },
      active: { value: { _light: '{colors.orange.a3}', _dark: '{colors.orange.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.orange.a7}', _dark: '{colors.orange.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.orange.a11}', _dark: '{colors.orange.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.orange.a3}', _dark: '{colors.orange.a3}' } },
      active: { value: { _light: '{colors.orange.a4}', _dark: '{colors.orange.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.orange.a11}', _dark: '{colors.orange.a11}' } } },
  },
})
