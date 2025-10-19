import { defineSemanticTokens } from '@pandacss/dev'

export const mint = defineSemanticTokens.colors({
  '1': { value: { _light: '#f9fefd', _dark: '#0e1515' } },
  '2': { value: { _light: '#f2fbf9', _dark: '#0f1b1b' } },
  '3': { value: { _light: '#ddf9f2', _dark: '#092c2b' } },
  '4': { value: { _light: '#c8f4e9', _dark: '#003a38' } },
  '5': { value: { _light: '#b3ecde', _dark: '#004744' } },
  '6': { value: { _light: '#9ce0d0', _dark: '#105650' } },
  '7': { value: { _light: '#7ecfbd', _dark: '#1e685f' } },
  '8': { value: { _light: '#4cbba5', _dark: '#277f70' } },
  '9': { value: { _light: '#86ead4', _dark: '#86ead4' } },
  '10': { value: { _light: '#7de0cb', _dark: '#a8f5e5' } },
  '11': { value: { _light: '#027864', _dark: '#58d5ba' } },
  '12': { value: { _light: '#16433c', _dark: '#c4f5e1' } },
  a1: { value: { _light: '#00d5aa06', _dark: '#00dede05' } },
  a2: { value: { _light: '#00b18a0d', _dark: '#00f9f90b' } },
  a3: { value: { _light: '#00d29e22', _dark: '#00fff61d' } },
  a4: { value: { _light: '#00cc9937', _dark: '#00fff42c' } },
  a5: { value: { _light: '#00c0914c', _dark: '#00fff23a' } },
  a6: { value: { _light: '#00b08663', _dark: '#0effeb4a' } },
  a7: { value: { _light: '#00a17d81', _dark: '#34fde55e' } },
  a8: { value: { _light: '#009e7fb3', _dark: '#41ffdf76' } },
  a9: { value: { _light: '#00d3a579', _dark: '#92ffe7e9' } },
  a10: { value: { _light: '#00c39982', _dark: '#aefeedf5' } },
  a11: { value: { _light: '#007763fd', _dark: '#67ffded2' } },
  a12: { value: { _light: '#00312ae9', _dark: '#cbfee9f5' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.mint.9}', _dark: '{colors.mint.9}' } },
      hover: { value: { _light: '{colors.mint.10}', _dark: '{colors.mint.10}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.1}' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.mint.a3}', _dark: '{colors.mint.a3}' } },
      hover: { value: { _light: '{colors.mint.a4}', _dark: '{colors.mint.a4}' } },
      active: { value: { _light: '{colors.mint.a5}', _dark: '{colors.mint.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.mint.a11}', _dark: '{colors.mint.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.mint.a2}', _dark: '{colors.mint.a2}' } },
      active: { value: { _light: '{colors.mint.a3}', _dark: '{colors.mint.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.mint.a6}', _dark: '{colors.mint.a6}' } },
      hover: { value: { _light: '{colors.mint.a7}', _dark: '{colors.mint.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.mint.a11}', _dark: '{colors.mint.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.mint.a2}', _dark: '{colors.mint.a2}' } },
      active: { value: { _light: '{colors.mint.a3}', _dark: '{colors.mint.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.mint.a7}', _dark: '{colors.mint.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.mint.a11}', _dark: '{colors.mint.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.mint.a3}', _dark: '{colors.mint.a3}' } },
      active: { value: { _light: '{colors.mint.a4}', _dark: '{colors.mint.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.mint.a11}', _dark: '{colors.mint.a11}' } } },
  },
})
