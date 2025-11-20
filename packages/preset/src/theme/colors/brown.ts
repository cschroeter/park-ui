import { defineSemanticTokens } from '@pandacss/dev'

export const brown = defineSemanticTokens.colors({
  '1': { value: { _light: '#fefdfc', _dark: '#12110f' } },
  '2': { value: { _light: '#fcf9f6', _dark: '#1c1816' } },
  '3': { value: { _light: '#f6eee7', _dark: '#28211d' } },
  '4': { value: { _light: '#f0e4d9', _dark: '#322922' } },
  '5': { value: { _light: '#ebdaca', _dark: '#3e3128' } },
  '6': { value: { _light: '#e4cdb7', _dark: '#4d3c2f' } },
  '7': { value: { _light: '#dcbc9f', _dark: '#614a39' } },
  '8': { value: { _light: '#cea37e', _dark: '#7c5f46' } },
  '9': { value: { _light: '#ad7f58', _dark: '#ad7f58' } },
  '10': { value: { _light: '#a07553', _dark: '#b88c67' } },
  '11': { value: { _light: '#815e46', _dark: '#dbb594' } },
  '12': { value: { _light: '#3e332e', _dark: '#f2e1ca' } },
  a1: { value: { _light: '#aa550003', _dark: '#91110002' } },
  a2: { value: { _light: '#aa550009', _dark: '#fba67c0c' } },
  a3: { value: { _light: '#a04b0018', _dark: '#fcb58c19' } },
  a4: { value: { _light: '#9b4a0026', _dark: '#fbbb8a24' } },
  a5: { value: { _light: '#9f4d0035', _dark: '#fcb88931' } },
  a6: { value: { _light: '#a04e0048', _dark: '#fdba8741' } },
  a7: { value: { _light: '#a34e0060', _dark: '#ffbb8856' } },
  a8: { value: { _light: '#9f4a0081', _dark: '#ffbe8773' } },
  a9: { value: { _light: '#823c00a7', _dark: '#feb87da8' } },
  a10: { value: { _light: '#723300ac', _dark: '#ffc18cb3' } },
  a11: { value: { _light: '#522100b9', _dark: '#fed1aad9' } },
  a12: { value: { _light: '#140600d1', _dark: '#feecd4f2' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.brown.9}', _dark: '{colors.brown.9}' } },
      hover: { value: { _light: '{colors.brown.10}', _dark: '{colors.brown.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.brown.a3}', _dark: '{colors.brown.a3}' } },
      hover: { value: { _light: '{colors.brown.a4}', _dark: '{colors.brown.a4}' } },
      active: { value: { _light: '{colors.brown.a5}', _dark: '{colors.brown.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.brown.a11}', _dark: '{colors.brown.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.brown.a2}', _dark: '{colors.brown.a2}' } },
      active: { value: { _light: '{colors.brown.a3}', _dark: '{colors.brown.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.brown.a6}', _dark: '{colors.brown.a6}' } },
      hover: { value: { _light: '{colors.brown.a7}', _dark: '{colors.brown.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.brown.a11}', _dark: '{colors.brown.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.brown.a2}', _dark: '{colors.brown.a2}' } },
      active: { value: { _light: '{colors.brown.a3}', _dark: '{colors.brown.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.brown.a7}', _dark: '{colors.brown.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.brown.a11}', _dark: '{colors.brown.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.brown.a3}', _dark: '{colors.brown.a3}' } },
      active: { value: { _light: '{colors.brown.a4}', _dark: '{colors.brown.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.brown.a11}', _dark: '{colors.brown.a11}' } } },
  },
})
