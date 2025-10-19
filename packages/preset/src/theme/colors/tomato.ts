import { defineSemanticTokens } from '@pandacss/dev'

export const tomato = defineSemanticTokens.colors({
  '1': { value: { _light: '#fffcfc', _dark: '#181111' } },
  '2': { value: { _light: '#fff8f7', _dark: '#1f1513' } },
  '3': { value: { _light: '#feebe7', _dark: '#391714' } },
  '4': { value: { _light: '#ffdcd3', _dark: '#4e1511' } },
  '5': { value: { _light: '#ffcdc2', _dark: '#5e1c16' } },
  '6': { value: { _light: '#fdbdaf', _dark: '#6e2920' } },
  '7': { value: { _light: '#f5a898', _dark: '#853a2d' } },
  '8': { value: { _light: '#ec8e7b', _dark: '#ac4d39' } },
  '9': { value: { _light: '#e54d2e', _dark: '#e54d2e' } },
  '10': { value: { _light: '#dd4425', _dark: '#ec6142' } },
  '11': { value: { _light: '#d13415', _dark: '#ff977d' } },
  '12': { value: { _light: '#5c271f', _dark: '#fbd3cb' } },
  a1: { value: { _light: '#ff000003', _dark: '#f1121208' } },
  a2: { value: { _light: '#ff200008', _dark: '#ff55330f' } },
  a3: { value: { _light: '#f52b0018', _dark: '#ff35232b' } },
  a4: { value: { _light: '#ff35002c', _dark: '#fd201142' } },
  a5: { value: { _light: '#ff2e003d', _dark: '#fe332153' } },
  a6: { value: { _light: '#f92d0050', _dark: '#ff4f3864' } },
  a7: { value: { _light: '#e7280067', _dark: '#fd644a7d' } },
  a8: { value: { _light: '#db250084', _dark: '#fe6d4ea7' } },
  a9: { value: { _light: '#df2600d1', _dark: '#fe5431e4' } },
  a10: { value: { _light: '#d72400da', _dark: '#ff6847eb' } },
  a11: { value: { _light: '#cd2200ea', _dark: '#ff977d' } },
  a12: { value: { _light: '#460900e0', _dark: '#ffd6cefb' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.tomato.9}', _dark: '{colors.tomato.9}' } },
      hover: { value: { _light: '{colors.tomato.10}', _dark: '{colors.tomato.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.tomato.a3}', _dark: '{colors.tomato.a3}' } },
      hover: { value: { _light: '{colors.tomato.a4}', _dark: '{colors.tomato.a4}' } },
      active: { value: { _light: '{colors.tomato.a5}', _dark: '{colors.tomato.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.tomato.a11}', _dark: '{colors.tomato.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.tomato.a2}', _dark: '{colors.tomato.a2}' } },
      active: { value: { _light: '{colors.tomato.a3}', _dark: '{colors.tomato.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.tomato.a6}', _dark: '{colors.tomato.a6}' } },
      hover: { value: { _light: '{colors.tomato.a7}', _dark: '{colors.tomato.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.tomato.a11}', _dark: '{colors.tomato.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.tomato.a2}', _dark: '{colors.tomato.a2}' } },
      active: { value: { _light: '{colors.tomato.a3}', _dark: '{colors.tomato.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.tomato.a7}', _dark: '{colors.tomato.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.tomato.a11}', _dark: '{colors.tomato.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.tomato.a3}', _dark: '{colors.tomato.a3}' } },
      active: { value: { _light: '{colors.tomato.a4}', _dark: '{colors.tomato.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.tomato.a11}', _dark: '{colors.tomato.a11}' } } },
  },
})
