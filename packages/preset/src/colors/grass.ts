import { defineSemanticTokens } from '@pandacss/dev'

export const grass = defineSemanticTokens.colors({
  '1': { value: { _light: '#fbfefb', _dark: '#0e1511' } },
  '2': { value: { _light: '#f5fbf5', _dark: '#141a15' } },
  '3': { value: { _light: '#e9f6e9', _dark: '#1b2a1e' } },
  '4': { value: { _light: '#daf1db', _dark: '#1d3a24' } },
  '5': { value: { _light: '#c9e8ca', _dark: '#25482d' } },
  '6': { value: { _light: '#b2ddb5', _dark: '#2d5736' } },
  '7': { value: { _light: '#94ce9a', _dark: '#366740' } },
  '8': { value: { _light: '#65ba74', _dark: '#3e7949' } },
  '9': { value: { _light: '#46a758', _dark: '#46a758' } },
  '10': { value: { _light: '#3e9b4f', _dark: '#53b365' } },
  '11': { value: { _light: '#2a7e3b', _dark: '#71d083' } },
  '12': { value: { _light: '#203c25', _dark: '#c2f0c2' } },
  a1: { value: { _light: '#00c00004', _dark: '#00de1205' } },
  a2: { value: { _light: '#0099000a', _dark: '#5ef7780a' } },
  a3: { value: { _light: '#00970016', _dark: '#70fe8c1b' } },
  a4: { value: { _light: '#009f0725', _dark: '#57ff802c' } },
  a5: { value: { _light: '#00930536', _dark: '#68ff8b3b' } },
  a6: { value: { _light: '#008f0a4d', _dark: '#71ff8f4b' } },
  a7: { value: { _light: '#018b0f6b', _dark: '#77fd925d' } },
  a8: { value: { _light: '#008d199a', _dark: '#77fd9070' } },
  a9: { value: { _light: '#008619b9', _dark: '#65ff82a1' } },
  a10: { value: { _light: '#007b17c1', _dark: '#72ff8dae' } },
  a11: { value: { _light: '#006514d5', _dark: '#89ff9fcd' } },
  a12: { value: { _light: '#002006df', _dark: '#ceffceef' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.grass.9}', _dark: '{colors.grass.9}' } },
      hover: { value: { _light: '{colors.grass.10}', _dark: '{colors.grass.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.grass.a3}', _dark: '{colors.grass.a3}' } },
      hover: { value: { _light: '{colors.grass.a4}', _dark: '{colors.grass.a4}' } },
      active: { value: { _light: '{colors.grass.a5}', _dark: '{colors.grass.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.grass.a11}', _dark: '{colors.grass.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.grass.a2}', _dark: '{colors.grass.a2}' } },
      active: { value: { _light: '{colors.grass.a3}', _dark: '{colors.grass.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.grass.a6}', _dark: '{colors.grass.a6}' } },
      hover: { value: { _light: '{colors.grass.a7}', _dark: '{colors.grass.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.grass.a11}', _dark: '{colors.grass.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.grass.a2}', _dark: '{colors.grass.a2}' } },
      active: { value: { _light: '{colors.grass.a3}', _dark: '{colors.grass.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.grass.a7}', _dark: '{colors.grass.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.grass.a11}', _dark: '{colors.grass.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.grass.a3}', _dark: '{colors.grass.a3}' } },
      active: { value: { _light: '{colors.grass.a4}', _dark: '{colors.grass.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.grass.a11}', _dark: '{colors.grass.a11}' } } },
  },
})
