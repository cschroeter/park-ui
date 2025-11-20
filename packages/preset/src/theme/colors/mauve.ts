import { defineSemanticTokens } from '@pandacss/dev'

export const mauve = defineSemanticTokens.colors({
  '1': { value: { _light: '#fdfcfd', _dark: '#121113' } },
  '2': { value: { _light: '#faf9fb', _dark: '#1a191b' } },
  '3': { value: { _light: '#f2eff3', _dark: '#232225' } },
  '4': { value: { _light: '#eae7ec', _dark: '#2b292d' } },
  '5': { value: { _light: '#e3dfe6', _dark: '#323035' } },
  '6': { value: { _light: '#dbd8e0', _dark: '#3c393f' } },
  '7': { value: { _light: '#d0cdd7', _dark: '#49474e' } },
  '8': { value: { _light: '#bcbac7', _dark: '#625f69' } },
  '9': { value: { _light: '#8e8c99', _dark: '#6f6d78' } },
  '10': { value: { _light: '#84828e', _dark: '#7c7a85' } },
  '11': { value: { _light: '#65636d', _dark: '#b5b2bc' } },
  '12': { value: { _light: '#211f26', _dark: '#eeeef0' } },
  a1: { value: { _light: '#55005503', _dark: '#00000000' } },
  a2: { value: { _light: '#2b005506', _dark: '#f5f4f609' } },
  a3: { value: { _light: '#30004010', _dark: '#ebeaf814' } },
  a4: { value: { _light: '#20003618', _dark: '#eee5f81d' } },
  a5: { value: { _light: '#20003820', _dark: '#efe6fe25' } },
  a6: { value: { _light: '#14003527', _dark: '#f1e6fd30' } },
  a7: { value: { _light: '#10003332', _dark: '#eee9ff40' } },
  a8: { value: { _light: '#08003145', _dark: '#eee7ff5d' } },
  a9: { value: { _light: '#05001d73', _dark: '#eae6fd6e' } },
  a10: { value: { _light: '#0500197d', _dark: '#ece9fd7c' } },
  a11: { value: { _light: '#0400119c', _dark: '#f5f1ffb7' } },
  a12: { value: { _light: '#020008e0', _dark: '#fdfdffef' } },
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
