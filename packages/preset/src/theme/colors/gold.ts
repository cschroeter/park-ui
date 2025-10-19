import { defineSemanticTokens } from '@pandacss/dev'

export const gold = defineSemanticTokens.colors({
  '1': { value: { _light: '#fdfdfc', _dark: '#121211' } },
  '2': { value: { _light: '#faf9f2', _dark: '#1b1a17' } },
  '3': { value: { _light: '#f2f0e7', _dark: '#24231f' } },
  '4': { value: { _light: '#eae6db', _dark: '#2d2b26' } },
  '5': { value: { _light: '#e1dccf', _dark: '#38352e' } },
  '6': { value: { _light: '#d8d0bf', _dark: '#444039' } },
  '7': { value: { _light: '#cbc0aa', _dark: '#544f46' } },
  '8': { value: { _light: '#b9a88d', _dark: '#696256' } },
  '9': { value: { _light: '#978365', _dark: '#978365' } },
  '10': { value: { _light: '#8c7a5e', _dark: '#a39073' } },
  '11': { value: { _light: '#71624b', _dark: '#cbb99f' } },
  '12': { value: { _light: '#3b352b', _dark: '#e8e2d9' } },
  a1: { value: { _light: '#55550003', _dark: '#91911102' } },
  a2: { value: { _light: '#9d8a000d', _dark: '#f9e29d0b' } },
  a3: { value: { _light: '#75600018', _dark: '#f8ecbb15' } },
  a4: { value: { _light: '#6b4e0024', _dark: '#ffeec41e' } },
  a5: { value: { _light: '#60460030', _dark: '#feecc22a' } },
  a6: { value: { _light: '#64440040', _dark: '#feebcb37' } },
  a7: { value: { _light: '#63420055', _dark: '#ffedcd48' } },
  a8: { value: { _light: '#633d0072', _dark: '#fdeaca5f' } },
  a9: { value: { _light: '#5332009a', _dark: '#ffdba690' } },
  a10: { value: { _light: '#492d00a1', _dark: '#fedfb09d' } },
  a11: { value: { _light: '#362100b4', _dark: '#fee7c6c8' } },
  a12: { value: { _light: '#130c00d4', _dark: '#fef7ede7' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.gold.9}', _dark: '{colors.gold.9}' } },
      hover: { value: { _light: '{colors.gold.10}', _dark: '{colors.gold.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.gold.a3}', _dark: '{colors.gold.a3}' } },
      hover: { value: { _light: '{colors.gold.a4}', _dark: '{colors.gold.a4}' } },
      active: { value: { _light: '{colors.gold.a5}', _dark: '{colors.gold.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.gold.a11}', _dark: '{colors.gold.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.gold.a2}', _dark: '{colors.gold.a2}' } },
      active: { value: { _light: '{colors.gold.a3}', _dark: '{colors.gold.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.gold.a6}', _dark: '{colors.gold.a6}' } },
      hover: { value: { _light: '{colors.gold.a7}', _dark: '{colors.gold.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.gold.a11}', _dark: '{colors.gold.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.gold.a2}', _dark: '{colors.gold.a2}' } },
      active: { value: { _light: '{colors.gold.a3}', _dark: '{colors.gold.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.gold.a7}', _dark: '{colors.gold.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.gold.a11}', _dark: '{colors.gold.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.gold.a3}', _dark: '{colors.gold.a3}' } },
      active: { value: { _light: '{colors.gold.a4}', _dark: '{colors.gold.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.gold.a11}', _dark: '{colors.gold.a11}' } } },
  },
})
