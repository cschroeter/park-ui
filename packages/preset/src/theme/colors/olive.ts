import { defineSemanticTokens } from '@pandacss/dev'

export const olive = defineSemanticTokens.colors({
  '1': { value: { _light: '#fcfdfc', _dark: '#111210' } },
  '2': { value: { _light: '#f8faf8', _dark: '#181917' } },
  '3': { value: { _light: '#eff1ef', _dark: '#212220' } },
  '4': { value: { _light: '#e7e9e7', _dark: '#282a27' } },
  '5': { value: { _light: '#dfe2df', _dark: '#2f312e' } },
  '6': { value: { _light: '#d7dad7', _dark: '#383a36' } },
  '7': { value: { _light: '#cccfcc', _dark: '#454843' } },
  '8': { value: { _light: '#b9bcb8', _dark: '#5c625b' } },
  '9': { value: { _light: '#898e87', _dark: '#687066' } },
  '10': { value: { _light: '#7f847d', _dark: '#767d74' } },
  '11': { value: { _light: '#60655f', _dark: '#afb5ad' } },
  '12': { value: { _light: '#1d211c', _dark: '#eceeec' } },
  a1: { value: { _light: '#00550003', _dark: '#00000000' } },
  a2: { value: { _light: '#00490007', _dark: '#f1f2f008' } },
  a3: { value: { _light: '#00200010', _dark: '#f4f5f312' } },
  a4: { value: { _light: '#00160018', _dark: '#f3fef21a' } },
  a5: { value: { _light: '#00180020', _dark: '#f2fbf122' } },
  a6: { value: { _light: '#00140028', _dark: '#f4faed2c' } },
  a7: { value: { _light: '#000f0033', _dark: '#f2fced3b' } },
  a8: { value: { _light: '#040f0047', _dark: '#edfdeb57' } },
  a9: { value: { _light: '#050f0078', _dark: '#ebfde766' } },
  a10: { value: { _light: '#040e0082', _dark: '#f0fdec74' } },
  a11: { value: { _light: '#020a00a0', _dark: '#f6fef4b0' } },
  a12: { value: { _light: '#010600e3', _dark: '#fdfffded' } },
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
