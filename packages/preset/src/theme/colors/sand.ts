import { defineSemanticTokens } from '@pandacss/dev'

export const sand = defineSemanticTokens.colors({
  '1': { value: { _light: '#fdfdfc', _dark: '#111110' } },
  '2': { value: { _light: '#f9f9f8', _dark: '#191918' } },
  '3': { value: { _light: '#f1f0ef', _dark: '#222221' } },
  '4': { value: { _light: '#e9e8e6', _dark: '#2a2a28' } },
  '5': { value: { _light: '#e2e1de', _dark: '#31312e' } },
  '6': { value: { _light: '#dad9d6', _dark: '#3b3a37' } },
  '7': { value: { _light: '#cfceca', _dark: '#494844' } },
  '8': { value: { _light: '#bcbbb5', _dark: '#62605b' } },
  '9': { value: { _light: '#8d8d86', _dark: '#6f6d66' } },
  '10': { value: { _light: '#82827c', _dark: '#7c7b74' } },
  '11': { value: { _light: '#63635e', _dark: '#b5b3ad' } },
  '12': { value: { _light: '#21201c', _dark: '#eeeeec' } },
  a1: { value: { _light: '#55550003', _dark: '#00000000' } },
  a2: { value: { _light: '#25250007', _dark: '#f4f4f309' } },
  a3: { value: { _light: '#20100010', _dark: '#f6f6f513' } },
  a4: { value: { _light: '#1f150019', _dark: '#fefef31b' } },
  a5: { value: { _light: '#1f180021', _dark: '#fbfbeb23' } },
  a6: { value: { _light: '#19130029', _dark: '#fffaed2d' } },
  a7: { value: { _light: '#19140035', _dark: '#fffbed3c' } },
  a8: { value: { _light: '#1915014a', _dark: '#fff9eb57' } },
  a9: { value: { _light: '#0f0f0079', _dark: '#fffae965' } },
  a10: { value: { _light: '#0c0c0083', _dark: '#fffdee73' } },
  a11: { value: { _light: '#080800a1', _dark: '#fffcf4b0' } },
  a12: { value: { _light: '#060500e3', _dark: '#fffffded' } },
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
      DEFAULT: { value: { _light: '{colors.white}', _dark: '{colors.gray.1}' } },
      hover: { value: { _light: '{colors.gray.2}', _dark: '{colors.gray.2}' } },
      active: { value: { _light: '{colors.gray.3}', _dark: '{colors.gray.3}' } },
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
