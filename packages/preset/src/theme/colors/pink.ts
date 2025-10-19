import { defineSemanticTokens } from '@pandacss/dev'

export const pink = defineSemanticTokens.colors({
  '1': { value: { _light: '#fffcfe', _dark: '#191117' } },
  '2': { value: { _light: '#fef7fb', _dark: '#21121d' } },
  '3': { value: { _light: '#fee9f5', _dark: '#37172f' } },
  '4': { value: { _light: '#fbdcef', _dark: '#4b143d' } },
  '5': { value: { _light: '#f6cee7', _dark: '#591c47' } },
  '6': { value: { _light: '#efbfdd', _dark: '#692955' } },
  '7': { value: { _light: '#e7acd0', _dark: '#833869' } },
  '8': { value: { _light: '#dd93c2', _dark: '#a84885' } },
  '9': { value: { _light: '#d6409f', _dark: '#d6409f' } },
  '10': { value: { _light: '#cf3897', _dark: '#de51a8' } },
  '11': { value: { _light: '#c2298a', _dark: '#ff8dcc' } },
  '12': { value: { _light: '#651249', _dark: '#fdd1ea' } },
  a1: { value: { _light: '#ff00aa03', _dark: '#f412bc09' } },
  a2: { value: { _light: '#e0008008', _dark: '#f420bb12' } },
  a3: { value: { _light: '#f4008c16', _dark: '#fe37cc29' } },
  a4: { value: { _light: '#e2008b23', _dark: '#fc1ec43f' } },
  a5: { value: { _light: '#d1008331', _dark: '#fd35c24e' } },
  a6: { value: { _light: '#c0007840', _dark: '#fd51c75f' } },
  a7: { value: { _light: '#b6006f53', _dark: '#fd62c87b' } },
  a8: { value: { _light: '#af006f6c', _dark: '#ff68c8a2' } },
  a9: { value: { _light: '#c8007fbf', _dark: '#fe49bcd4' } },
  a10: { value: { _light: '#c2007ac7', _dark: '#ff5cc0dc' } },
  a11: { value: { _light: '#b60074d6', _dark: '#ff8dcc' } },
  a12: { value: { _light: '#59003bed', _dark: '#ffd3ecfd' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.pink.9}', _dark: '{colors.pink.9}' } },
      hover: { value: { _light: '{colors.pink.10}', _dark: '{colors.pink.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.pink.a3}', _dark: '{colors.pink.a3}' } },
      hover: { value: { _light: '{colors.pink.a4}', _dark: '{colors.pink.a4}' } },
      active: { value: { _light: '{colors.pink.a5}', _dark: '{colors.pink.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.pink.a11}', _dark: '{colors.pink.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.pink.a2}', _dark: '{colors.pink.a2}' } },
      active: { value: { _light: '{colors.pink.a3}', _dark: '{colors.pink.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.pink.a6}', _dark: '{colors.pink.a6}' } },
      hover: { value: { _light: '{colors.pink.a7}', _dark: '{colors.pink.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.pink.a11}', _dark: '{colors.pink.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.pink.a2}', _dark: '{colors.pink.a2}' } },
      active: { value: { _light: '{colors.pink.a3}', _dark: '{colors.pink.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.pink.a7}', _dark: '{colors.pink.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.pink.a11}', _dark: '{colors.pink.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.pink.a3}', _dark: '{colors.pink.a3}' } },
      active: { value: { _light: '{colors.pink.a4}', _dark: '{colors.pink.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.pink.a11}', _dark: '{colors.pink.a11}' } } },
  },
})
