import { defineSemanticTokens } from '@pandacss/dev'

export const bronze = defineSemanticTokens.colors({
  '1': { value: { _light: '#fdfcfc', _dark: '#141110' } },
  '2': { value: { _light: '#fdf7f5', _dark: '#1c1917' } },
  '3': { value: { _light: '#f6edea', _dark: '#262220' } },
  '4': { value: { _light: '#efe4df', _dark: '#302a27' } },
  '5': { value: { _light: '#e7d9d3', _dark: '#3b3330' } },
  '6': { value: { _light: '#dfcdc5', _dark: '#493e3a' } },
  '7': { value: { _light: '#d3bcb3', _dark: '#5a4c47' } },
  '8': { value: { _light: '#c2a499', _dark: '#6f5f58' } },
  '9': { value: { _light: '#a18072', _dark: '#a18072' } },
  '10': { value: { _light: '#957468', _dark: '#ae8c7e' } },
  '11': { value: { _light: '#7d5e54', _dark: '#d4b3a5' } },
  '12': { value: { _light: '#43302b', _dark: '#ede0d9' } },
  a1: { value: { _light: '#55000003', _dark: '#d1110004' } },
  a2: { value: { _light: '#cc33000a', _dark: '#fbbc910c' } },
  a3: { value: { _light: '#92250015', _dark: '#faceb817' } },
  a4: { value: { _light: '#80280020', _dark: '#facdb622' } },
  a5: { value: { _light: '#7423002c', _dark: '#ffd2c12d' } },
  a6: { value: { _light: '#7324003a', _dark: '#ffd1c03c' } },
  a7: { value: { _light: '#6c1f004c', _dark: '#fdd0c04f' } },
  a8: { value: { _light: '#671c0066', _dark: '#ffd6c565' } },
  a9: { value: { _light: '#551a008d', _dark: '#fec7b09b' } },
  a10: { value: { _light: '#4c150097', _dark: '#fecab5a9' } },
  a11: { value: { _light: '#3d0f00ab', _dark: '#ffd7c6d1' } },
  a12: { value: { _light: '#1d0600d4', _dark: '#fff1e9ec' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.bronze.9}', _dark: '{colors.bronze.9}' } },
      hover: { value: { _light: '{colors.bronze.10}', _dark: '{colors.bronze.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.bronze.a3}', _dark: '{colors.bronze.a3}' } },
      hover: { value: { _light: '{colors.bronze.a4}', _dark: '{colors.bronze.a4}' } },
      active: { value: { _light: '{colors.bronze.a5}', _dark: '{colors.bronze.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.bronze.a11}', _dark: '{colors.bronze.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.bronze.a2}', _dark: '{colors.bronze.a2}' } },
      active: { value: { _light: '{colors.bronze.a3}', _dark: '{colors.bronze.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.bronze.a6}', _dark: '{colors.bronze.a6}' } },
      hover: { value: { _light: '{colors.bronze.a7}', _dark: '{colors.bronze.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.bronze.a11}', _dark: '{colors.bronze.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.bronze.a2}', _dark: '{colors.bronze.a2}' } },
      active: { value: { _light: '{colors.bronze.a3}', _dark: '{colors.bronze.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.bronze.a7}', _dark: '{colors.bronze.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.bronze.a11}', _dark: '{colors.bronze.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.bronze.a3}', _dark: '{colors.bronze.a3}' } },
      active: { value: { _light: '{colors.bronze.a4}', _dark: '{colors.bronze.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.bronze.a11}', _dark: '{colors.bronze.a11}' } } },
  },
})
