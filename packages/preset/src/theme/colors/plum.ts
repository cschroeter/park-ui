import { defineSemanticTokens } from '@pandacss/dev'

export const plum = defineSemanticTokens.colors({
  '1': { value: { _light: '#fefcff', _dark: '#181118' } },
  '2': { value: { _light: '#fdf7fd', _dark: '#201320' } },
  '3': { value: { _light: '#fbebfb', _dark: '#351a35' } },
  '4': { value: { _light: '#f7def8', _dark: '#451d47' } },
  '5': { value: { _light: '#f2d1f3', _dark: '#512454' } },
  '6': { value: { _light: '#e9c2ec', _dark: '#5e3061' } },
  '7': { value: { _light: '#deade3', _dark: '#734079' } },
  '8': { value: { _light: '#cf91d8', _dark: '#92549c' } },
  '9': { value: { _light: '#ab4aba', _dark: '#ab4aba' } },
  '10': { value: { _light: '#a144af', _dark: '#b658c4' } },
  '11': { value: { _light: '#953ea3', _dark: '#e796f3' } },
  '12': { value: { _light: '#53195d', _dark: '#f4d4f4' } },
  a1: { value: { _light: '#aa00ff03', _dark: '#f112f108' } },
  a2: { value: { _light: '#c000c008', _dark: '#f22ff211' } },
  a3: { value: { _light: '#cc00cc14', _dark: '#fd4cfd27' } },
  a4: { value: { _light: '#c200c921', _dark: '#f646ff3a' } },
  a5: { value: { _light: '#b700bd2e', _dark: '#f455ff48' } },
  a6: { value: { _light: '#a400b03d', _dark: '#f66dff56' } },
  a7: { value: { _light: '#9900a852', _dark: '#f07cfd70' } },
  a8: { value: { _light: '#9000a56e', _dark: '#ee84ff95' } },
  a9: { value: { _light: '#89009eb5', _dark: '#e961feb6' } },
  a10: { value: { _light: '#7f0092bb', _dark: '#ed70ffc0' } },
  a11: { value: { _light: '#730086c1', _dark: '#f19cfef3' } },
  a12: { value: { _light: '#40004be6', _dark: '#feddfef4' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.plum.9}', _dark: '{colors.plum.9}' } },
      hover: { value: { _light: '{colors.plum.10}', _dark: '{colors.plum.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.plum.a3}', _dark: '{colors.plum.a3}' } },
      hover: { value: { _light: '{colors.plum.a4}', _dark: '{colors.plum.a4}' } },
      active: { value: { _light: '{colors.plum.a5}', _dark: '{colors.plum.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.plum.a11}', _dark: '{colors.plum.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.plum.a2}', _dark: '{colors.plum.a2}' } },
      active: { value: { _light: '{colors.plum.a3}', _dark: '{colors.plum.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.plum.a6}', _dark: '{colors.plum.a6}' } },
      hover: { value: { _light: '{colors.plum.a7}', _dark: '{colors.plum.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.plum.a11}', _dark: '{colors.plum.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.plum.a2}', _dark: '{colors.plum.a2}' } },
      active: { value: { _light: '{colors.plum.a3}', _dark: '{colors.plum.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.plum.a7}', _dark: '{colors.plum.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.plum.a11}', _dark: '{colors.plum.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.plum.a3}', _dark: '{colors.plum.a3}' } },
      active: { value: { _light: '{colors.plum.a4}', _dark: '{colors.plum.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.plum.a11}', _dark: '{colors.plum.a11}' } } },
  },
})
