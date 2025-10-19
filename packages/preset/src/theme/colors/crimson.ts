import { defineSemanticTokens } from '@pandacss/dev'

export const crimson = defineSemanticTokens.colors({
  '1': { value: { _light: '#fffcfd', _dark: '#191114' } },
  '2': { value: { _light: '#fef7f9', _dark: '#201318' } },
  '3': { value: { _light: '#ffe9f0', _dark: '#381525' } },
  '4': { value: { _light: '#fedce7', _dark: '#4d122f' } },
  '5': { value: { _light: '#facedd', _dark: '#5c1839' } },
  '6': { value: { _light: '#f3bed1', _dark: '#6d2545' } },
  '7': { value: { _light: '#eaacc3', _dark: '#873356' } },
  '8': { value: { _light: '#e093b2', _dark: '#b0436e' } },
  '9': { value: { _light: '#e93d82', _dark: '#e93d82' } },
  '10': { value: { _light: '#df3478', _dark: '#ee518a' } },
  '11': { value: { _light: '#cb1d63', _dark: '#ff92ad' } },
  '12': { value: { _light: '#621639', _dark: '#fdd3e8' } },
  a1: { value: { _light: '#ff005503', _dark: '#f4126709' } },
  a2: { value: { _light: '#e0004008', _dark: '#f22f7a11' } },
  a3: { value: { _light: '#ff005216', _dark: '#fe2a8b2a' } },
  a4: { value: { _light: '#f8005123', _dark: '#fd158741' } },
  a5: { value: { _light: '#e5004f31', _dark: '#fd278f51' } },
  a6: { value: { _light: '#d0004b41', _dark: '#fe459763' } },
  a7: { value: { _light: '#bf004753', _dark: '#fd559b7f' } },
  a8: { value: { _light: '#b6004a6c', _dark: '#fe5b9bab' } },
  a9: { value: { _light: '#e2005bc2', _dark: '#fe418de8' } },
  a10: { value: { _light: '#d70056cb', _dark: '#ff5693ed' } },
  a11: { value: { _light: '#c4004fe2', _dark: '#ff92ad' } },
  a12: { value: { _light: '#530026e9', _dark: '#ffd5eafd' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.crimson.9}', _dark: '{colors.crimson.9}' } },
      hover: { value: { _light: '{colors.crimson.10}', _dark: '{colors.crimson.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.crimson.a3}', _dark: '{colors.crimson.a3}' } },
      hover: { value: { _light: '{colors.crimson.a4}', _dark: '{colors.crimson.a4}' } },
      active: { value: { _light: '{colors.crimson.a5}', _dark: '{colors.crimson.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.crimson.a11}', _dark: '{colors.crimson.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.crimson.a2}', _dark: '{colors.crimson.a2}' } },
      active: { value: { _light: '{colors.crimson.a3}', _dark: '{colors.crimson.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.crimson.a6}', _dark: '{colors.crimson.a6}' } },
      hover: { value: { _light: '{colors.crimson.a7}', _dark: '{colors.crimson.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.crimson.a11}', _dark: '{colors.crimson.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.crimson.a2}', _dark: '{colors.crimson.a2}' } },
      active: { value: { _light: '{colors.crimson.a3}', _dark: '{colors.crimson.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.crimson.a7}', _dark: '{colors.crimson.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.crimson.a11}', _dark: '{colors.crimson.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.crimson.a3}', _dark: '{colors.crimson.a3}' } },
      active: { value: { _light: '{colors.crimson.a4}', _dark: '{colors.crimson.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.crimson.a11}', _dark: '{colors.crimson.a11}' } } },
  },
})
