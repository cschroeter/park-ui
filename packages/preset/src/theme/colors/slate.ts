import { defineSemanticTokens } from '@pandacss/dev'

export const slate = defineSemanticTokens.colors({
  '1': { value: { _light: '#fcfcfd', _dark: '#111113' } },
  '2': { value: { _light: '#f9f9fb', _dark: '#18191b' } },
  '3': { value: { _light: '#f0f0f3', _dark: '#212225' } },
  '4': { value: { _light: '#e8e8ec', _dark: '#272a2d' } },
  '5': { value: { _light: '#e0e1e6', _dark: '#2e3135' } },
  '6': { value: { _light: '#d9d9e0', _dark: '#363a3f' } },
  '7': { value: { _light: '#cdced6', _dark: '#43484e' } },
  '8': { value: { _light: '#b9bbc6', _dark: '#5a6169' } },
  '9': { value: { _light: '#8b8d98', _dark: '#696e77' } },
  '10': { value: { _light: '#80838d', _dark: '#777b84' } },
  '11': { value: { _light: '#60646c', _dark: '#b0b4ba' } },
  '12': { value: { _light: '#1c2024', _dark: '#edeef0' } },
  a1: { value: { _light: '#00005503', _dark: '#00000000' } },
  a2: { value: { _light: '#00005506', _dark: '#d8f4f609' } },
  a3: { value: { _light: '#0000330f', _dark: '#ddeaf814' } },
  a4: { value: { _light: '#00002d17', _dark: '#d3edf81d' } },
  a5: { value: { _light: '#0009321f', _dark: '#d9edfe25' } },
  a6: { value: { _light: '#00002f26', _dark: '#d6ebfd30' } },
  a7: { value: { _light: '#00062e32', _dark: '#d9edff40' } },
  a8: { value: { _light: '#00083046', _dark: '#d9edff5d' } },
  a9: { value: { _light: '#00051d74', _dark: '#dfebfd6d' } },
  a10: { value: { _light: '#00071b7f', _dark: '#e5edfd7b' } },
  a11: { value: { _light: '#0007149f', _dark: '#f1f7feb5' } },
  a12: { value: { _light: '#000509e3', _dark: '#fcfdffef' } },
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
