import { defineSemanticTokens } from '@pandacss/dev'

export const blue = defineSemanticTokens.colors({
  '1': { value: { _light: '#fbfdff', _dark: '#0d1520' } },
  '2': { value: { _light: '#f4faff', _dark: '#111927' } },
  '3': { value: { _light: '#e6f4fe', _dark: '#0d2847' } },
  '4': { value: { _light: '#d5efff', _dark: '#003362' } },
  '5': { value: { _light: '#c2e5ff', _dark: '#004074' } },
  '6': { value: { _light: '#acd8fc', _dark: '#104d87' } },
  '7': { value: { _light: '#8ec8f6', _dark: '#205d9e' } },
  '8': { value: { _light: '#5eb1ef', _dark: '#2870bd' } },
  '9': { value: { _light: '#0090ff', _dark: '#0090ff' } },
  '10': { value: { _light: '#0588f0', _dark: '#3b9eff' } },
  '11': { value: { _light: '#0d74ce', _dark: '#70b8ff' } },
  '12': { value: { _light: '#113264', _dark: '#c2e6ff' } },
  a1: { value: { _light: '#0080ff04', _dark: '#004df211' } },
  a2: { value: { _light: '#008cff0b', _dark: '#1166fb18' } },
  a3: { value: { _light: '#008ff519', _dark: '#0077ff3a' } },
  a4: { value: { _light: '#009eff2a', _dark: '#0075ff57' } },
  a5: { value: { _light: '#0093ff3d', _dark: '#0081fd6b' } },
  a6: { value: { _light: '#0088f653', _dark: '#0f89fd7f' } },
  a7: { value: { _light: '#0083eb71', _dark: '#2a91fe98' } },
  a8: { value: { _light: '#0084e6a1', _dark: '#3094feb9' } },
  a9: { value: { _light: '#0090ff', _dark: '#0090ff' } },
  a10: { value: { _light: '#0086f0fa', _dark: '#3b9eff' } },
  a11: { value: { _light: '#006dcbf2', _dark: '#70b8ff' } },
  a12: { value: { _light: '#002359ee', _dark: '#c2e6ff' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.blue.9}', _dark: '{colors.blue.9}' } },
      hover: { value: { _light: '{colors.blue.10}', _dark: '{colors.blue.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.blue.a3}', _dark: '{colors.blue.a3}' } },
      hover: { value: { _light: '{colors.blue.a4}', _dark: '{colors.blue.a4}' } },
      active: { value: { _light: '{colors.blue.a5}', _dark: '{colors.blue.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.blue.a11}', _dark: '{colors.blue.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.blue.a2}', _dark: '{colors.blue.a2}' } },
      active: { value: { _light: '{colors.blue.a3}', _dark: '{colors.blue.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.blue.a6}', _dark: '{colors.blue.a6}' } },
      hover: { value: { _light: '{colors.blue.a7}', _dark: '{colors.blue.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.blue.a11}', _dark: '{colors.blue.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.blue.a2}', _dark: '{colors.blue.a2}' } },
      active: { value: { _light: '{colors.blue.a3}', _dark: '{colors.blue.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.blue.a7}', _dark: '{colors.blue.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.blue.a11}', _dark: '{colors.blue.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.blue.a3}', _dark: '{colors.blue.a3}' } },
      active: { value: { _light: '{colors.blue.a4}', _dark: '{colors.blue.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.blue.a11}', _dark: '{colors.blue.a11}' } } },
  },
})
