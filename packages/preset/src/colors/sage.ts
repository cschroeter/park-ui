import { defineSemanticTokens } from '@pandacss/dev'

export const sage = defineSemanticTokens.colors({
  '1': { value: { _light: '#fbfdfc', _dark: '#101211' } },
  '2': { value: { _light: '#f7f9f8', _dark: '#171918' } },
  '3': { value: { _light: '#eef1f0', _dark: '#202221' } },
  '4': { value: { _light: '#e6e9e8', _dark: '#272a29' } },
  '5': { value: { _light: '#dfe2e0', _dark: '#2e3130' } },
  '6': { value: { _light: '#d7dad9', _dark: '#373b39' } },
  '7': { value: { _light: '#cbcfcd', _dark: '#444947' } },
  '8': { value: { _light: '#b8bcba', _dark: '#5b625f' } },
  '9': { value: { _light: '#868e8b', _dark: '#63706b' } },
  '10': { value: { _light: '#7c8481', _dark: '#717d79' } },
  '11': { value: { _light: '#5f6563', _dark: '#adb5b2' } },
  '12': { value: { _light: '#1a211e', _dark: '#eceeed' } },
  a1: { value: { _light: '#00804004', _dark: '#00000000' } },
  a2: { value: { _light: '#00402008', _dark: '#f0f2f108' } },
  a3: { value: { _light: '#002d1e11', _dark: '#f3f5f412' } },
  a4: { value: { _light: '#001f1519', _dark: '#f2fefd1a' } },
  a5: { value: { _light: '#00180820', _dark: '#f1fbfa22' } },
  a6: { value: { _light: '#00140d28', _dark: '#edfbf42d' } },
  a7: { value: { _light: '#00140a34', _dark: '#edfcf73c' } },
  a8: { value: { _light: '#000f0847', _dark: '#ebfdf657' } },
  a9: { value: { _light: '#00110b79', _dark: '#dffdf266' } },
  a10: { value: { _light: '#00100a83', _dark: '#e5fdf674' } },
  a11: { value: { _light: '#000a07a0', _dark: '#f4fefbb0' } },
  a12: { value: { _light: '#000805e5', _dark: '#fdfffeed' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.black}', _dark: '{colors.white}' } },
      hover: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.white}', _dark: '{colors.black}' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.gray.a3}', _dark: '{colors.gray.a3}' } },
      hover: { value: { _light: '{colors.gray.a4}', _dark: '{colors.gray.a4}' } },
      active: { value: { _light: '{colors.gray.a5}', _dark: '{colors.gray.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.white}', _dark: '{colors.gray.2}' } },
      hover: { value: { _light: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
      active: { value: { _light: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.gray.6}', _dark: '{colors.gray.6}' } },
      hover: { value: { _light: '{colors.gray.7}', _dark: '{colors.gray.7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.gray.a2}', _dark: '{colors.gray.a2}' } },
      active: { value: { _light: '{colors.gray.a3}', _dark: '{colors.gray.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.gray.6}', _dark: '{colors.gray.6}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.gray.a3}', _dark: '{colors.gray.a3}' } },
      active: { value: { _light: '{colors.gray.a4}', _dark: '{colors.gray.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } } },
  },
})
