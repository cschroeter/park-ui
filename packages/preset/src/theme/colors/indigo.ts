import { defineSemanticTokens } from '@pandacss/dev'

export const indigo = defineSemanticTokens.colors({
  '1': { value: { _light: '#fdfdfe', _dark: '#11131f' } },
  '2': { value: { _light: '#f7f9ff', _dark: '#141726' } },
  '3': { value: { _light: '#edf2fe', _dark: '#182449' } },
  '4': { value: { _light: '#e1e9ff', _dark: '#1d2e62' } },
  '5': { value: { _light: '#d2deff', _dark: '#253974' } },
  '6': { value: { _light: '#c1d0ff', _dark: '#304384' } },
  '7': { value: { _light: '#abbdf9', _dark: '#3a4f97' } },
  '8': { value: { _light: '#8da4ef', _dark: '#435db1' } },
  '9': { value: { _light: '#3e63dd', _dark: '#3e63dd' } },
  '10': { value: { _light: '#3358d4', _dark: '#5472e4' } },
  '11': { value: { _light: '#3a5bc7', _dark: '#9eb1ff' } },
  '12': { value: { _light: '#1f2d5c', _dark: '#d6e1ff' } },
  a1: { value: { _light: '#00008002', _dark: '#1133ff0f' } },
  a2: { value: { _light: '#0040ff08', _dark: '#3354fa17' } },
  a3: { value: { _light: '#0047f112', _dark: '#2f62ff3c' } },
  a4: { value: { _light: '#0044ff1e', _dark: '#3566ff57' } },
  a5: { value: { _light: '#0044ff2d', _dark: '#4171fd6b' } },
  a6: { value: { _light: '#003eff3e', _dark: '#5178fd7c' } },
  a7: { value: { _light: '#0037ed54', _dark: '#5a7fff90' } },
  a8: { value: { _light: '#0034dc72', _dark: '#5b81feac' } },
  a9: { value: { _light: '#0031d2c1', _dark: '#4671ffdb' } },
  a10: { value: { _light: '#002ec9cc', _dark: '#5c7efee3' } },
  a11: { value: { _light: '#002bb7c5', _dark: '#9eb1ff' } },
  a12: { value: { _light: '#001046e0', _dark: '#d6e1ff' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.indigo.9}', _dark: '{colors.indigo.9}' } },
      hover: { value: { _light: '{colors.indigo.10}', _dark: '{colors.indigo.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.indigo.a3}', _dark: '{colors.indigo.a3}' } },
      hover: { value: { _light: '{colors.indigo.a4}', _dark: '{colors.indigo.a4}' } },
      active: { value: { _light: '{colors.indigo.a5}', _dark: '{colors.indigo.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.indigo.a11}', _dark: '{colors.indigo.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.indigo.a2}', _dark: '{colors.indigo.a2}' } },
      active: { value: { _light: '{colors.indigo.a3}', _dark: '{colors.indigo.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.indigo.a6}', _dark: '{colors.indigo.a6}' } },
      hover: { value: { _light: '{colors.indigo.a7}', _dark: '{colors.indigo.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.indigo.a11}', _dark: '{colors.indigo.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.indigo.a2}', _dark: '{colors.indigo.a2}' } },
      active: { value: { _light: '{colors.indigo.a3}', _dark: '{colors.indigo.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.indigo.a7}', _dark: '{colors.indigo.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.indigo.a11}', _dark: '{colors.indigo.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.indigo.a3}', _dark: '{colors.indigo.a3}' } },
      active: { value: { _light: '{colors.indigo.a4}', _dark: '{colors.indigo.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.indigo.a11}', _dark: '{colors.indigo.a11}' } } },
  },
})
