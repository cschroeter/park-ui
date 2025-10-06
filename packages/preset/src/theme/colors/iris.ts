import { defineSemanticTokens } from '@pandacss/dev'

export const iris = defineSemanticTokens.colors({
  '1': { value: { _light: '#fdfdff', _dark: '#13131e' } },
  '2': { value: { _light: '#f8f8ff', _dark: '#171625' } },
  '3': { value: { _light: '#f0f1fe', _dark: '#202248' } },
  '4': { value: { _light: '#e6e7ff', _dark: '#262a65' } },
  '5': { value: { _light: '#dadcff', _dark: '#303374' } },
  '6': { value: { _light: '#cbcdff', _dark: '#3d3e82' } },
  '7': { value: { _light: '#b8baf8', _dark: '#4a4a95' } },
  '8': { value: { _light: '#9b9ef0', _dark: '#5958b1' } },
  '9': { value: { _light: '#5b5bd6', _dark: '#5b5bd6' } },
  '10': { value: { _light: '#5151cd', _dark: '#6e6ade' } },
  '11': { value: { _light: '#5753c6', _dark: '#b1a9ff' } },
  '12': { value: { _light: '#272962', _dark: '#e0dffe' } },
  a1: { value: { _light: '#0000ff02', _dark: '#3636fe0e' } },
  a2: { value: { _light: '#0000ff07', _dark: '#564bf916' } },
  a3: { value: { _light: '#0011ee0f', _dark: '#525bff3b' } },
  a4: { value: { _light: '#000bff19', _dark: '#4d58ff5a' } },
  a5: { value: { _light: '#000eff25', _dark: '#5b62fd6b' } },
  a6: { value: { _light: '#000aff34', _dark: '#6d6ffd7a' } },
  a7: { value: { _light: '#0008e647', _dark: '#7777fe8e' } },
  a8: { value: { _light: '#0008d964', _dark: '#7b7afeac' } },
  a9: { value: { _light: '#0000c0a4', _dark: '#6a6afed4' } },
  a10: { value: { _light: '#0000b6ae', _dark: '#7d79ffdc' } },
  a11: { value: { _light: '#0600abac', _dark: '#b1a9ff' } },
  a12: { value: { _light: '#000246d8', _dark: '#e1e0fffe' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.iris.9}', _dark: '{colors.iris.9}' } },
      hover: { value: { _light: '{colors.iris.10}', _dark: '{colors.iris.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.iris.a3}', _dark: '{colors.iris.a3}' } },
      hover: { value: { _light: '{colors.iris.a4}', _dark: '{colors.iris.a4}' } },
      active: { value: { _light: '{colors.iris.a5}', _dark: '{colors.iris.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.iris.a11}', _dark: '{colors.iris.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.iris.a2}', _dark: '{colors.iris.a2}' } },
      active: { value: { _light: '{colors.iris.a3}', _dark: '{colors.iris.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.iris.a6}', _dark: '{colors.iris.a6}' } },
      hover: { value: { _light: '{colors.iris.a7}', _dark: '{colors.iris.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.iris.a11}', _dark: '{colors.iris.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.iris.a2}', _dark: '{colors.iris.a2}' } },
      active: { value: { _light: '{colors.iris.a3}', _dark: '{colors.iris.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.iris.a7}', _dark: '{colors.iris.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.iris.a11}', _dark: '{colors.iris.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.iris.a3}', _dark: '{colors.iris.a3}' } },
      active: { value: { _light: '{colors.iris.a4}', _dark: '{colors.iris.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.iris.a11}', _dark: '{colors.iris.a11}' } } },
  },
})
