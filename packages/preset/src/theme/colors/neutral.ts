import { defineSemanticTokens } from '@pandacss/dev'

export const neutral = defineSemanticTokens.colors({
  '1': { value: { _light: '#fcfcfc', _dark: '#111111' } },
  '2': { value: { _light: '#f9f9f9', _dark: '#191919' } },
  '3': { value: { _light: '#f0f0f0', _dark: '#222222' } },
  '4': { value: { _light: '#e8e8e8', _dark: '#2a2a2a' } },
  '5': { value: { _light: '#e0e0e0', _dark: '#313131' } },
  '6': { value: { _light: '#d9d9d9', _dark: '#3a3a3a' } },
  '7': { value: { _light: '#cecece', _dark: '#484848' } },
  '8': { value: { _light: '#bbbbbb', _dark: '#606060' } },
  '9': { value: { _light: '#8d8d8d', _dark: '#6e6e6e' } },
  '10': { value: { _light: '#838383', _dark: '#7b7b7b' } },
  '11': { value: { _light: '#646464', _dark: '#b4b4b4' } },
  '12': { value: { _light: '#202020', _dark: '#eeeeee' } },
  a1: { value: { _light: '#00000003', _dark: '#00000000' } },
  a2: { value: { _light: '#00000006', _dark: '#ffffff09' } },
  a3: { value: { _light: '#0000000f', _dark: '#ffffff12' } },
  a4: { value: { _light: '#00000017', _dark: '#ffffff1b' } },
  a5: { value: { _light: '#0000001f', _dark: '#ffffff22' } },
  a6: { value: { _light: '#00000026', _dark: '#ffffff2c' } },
  a7: { value: { _light: '#00000031', _dark: '#ffffff3b' } },
  a8: { value: { _light: '#00000044', _dark: '#ffffff55' } },
  a9: { value: { _light: '#00000072', _dark: '#ffffff64' } },
  a10: { value: { _light: '#0000007c', _dark: '#ffffff72' } },
  a11: { value: { _light: '#0000009b', _dark: '#ffffffaf' } },
  a12: { value: { _light: '#000000df', _dark: '#ffffffed' } },
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
