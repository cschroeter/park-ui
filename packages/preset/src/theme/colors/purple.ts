import { defineSemanticTokens } from '@pandacss/dev'

export const purple = defineSemanticTokens.colors({
  '1': { value: { _light: '#fefcfe', _dark: '#18111b' } },
  '2': { value: { _light: '#fbf7fe', _dark: '#1e1523' } },
  '3': { value: { _light: '#f7edfe', _dark: '#301c3b' } },
  '4': { value: { _light: '#f2e2fc', _dark: '#3d224e' } },
  '5': { value: { _light: '#ead5f9', _dark: '#48295c' } },
  '6': { value: { _light: '#e0c4f4', _dark: '#54346b' } },
  '7': { value: { _light: '#d1afec', _dark: '#664282' } },
  '8': { value: { _light: '#be93e4', _dark: '#8457aa' } },
  '9': { value: { _light: '#8e4ec6', _dark: '#8e4ec6' } },
  '10': { value: { _light: '#8347b9', _dark: '#9a5cd0' } },
  '11': { value: { _light: '#8145b5', _dark: '#d19dff' } },
  '12': { value: { _light: '#402060', _dark: '#ecd9fa' } },
  a1: { value: { _light: '#aa00aa03', _dark: '#b412f90b' } },
  a2: { value: { _light: '#8000e008', _dark: '#b744f714' } },
  a3: { value: { _light: '#8e00f112', _dark: '#c150ff2d' } },
  a4: { value: { _light: '#8d00e51d', _dark: '#bb53fd42' } },
  a5: { value: { _light: '#8000db2a', _dark: '#be5cfd51' } },
  a6: { value: { _light: '#7a01d03b', _dark: '#c16dfd61' } },
  a7: { value: { _light: '#6d00c350', _dark: '#c378fd7a' } },
  a8: { value: { _light: '#6600c06c', _dark: '#c47effa4' } },
  a9: { value: { _light: '#5c00adb1', _dark: '#b661ffc2' } },
  a10: { value: { _light: '#53009eb8', _dark: '#bc6fffcd' } },
  a11: { value: { _light: '#52009aba', _dark: '#d19dff' } },
  a12: { value: { _light: '#250049df', _dark: '#f1ddfffa' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.purple.9}', _dark: '{colors.purple.9}' } },
      hover: { value: { _light: '{colors.purple.10}', _dark: '{colors.purple.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.purple.a3}', _dark: '{colors.purple.a3}' } },
      hover: { value: { _light: '{colors.purple.a4}', _dark: '{colors.purple.a4}' } },
      active: { value: { _light: '{colors.purple.a5}', _dark: '{colors.purple.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.purple.a11}', _dark: '{colors.purple.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.purple.a2}', _dark: '{colors.purple.a2}' } },
      active: { value: { _light: '{colors.purple.a3}', _dark: '{colors.purple.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.purple.a6}', _dark: '{colors.purple.a6}' } },
      hover: { value: { _light: '{colors.purple.a7}', _dark: '{colors.purple.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.purple.a11}', _dark: '{colors.purple.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.purple.a2}', _dark: '{colors.purple.a2}' } },
      active: { value: { _light: '{colors.purple.a3}', _dark: '{colors.purple.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.purple.a7}', _dark: '{colors.purple.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.purple.a11}', _dark: '{colors.purple.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.purple.a3}', _dark: '{colors.purple.a3}' } },
      active: { value: { _light: '{colors.purple.a4}', _dark: '{colors.purple.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.purple.a11}', _dark: '{colors.purple.a11}' } } },
  },
})
