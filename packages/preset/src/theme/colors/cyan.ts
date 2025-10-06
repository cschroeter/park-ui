import { defineSemanticTokens } from '@pandacss/dev'

export const cyan = defineSemanticTokens.colors({
  '1': { value: { _light: '#fafdfe', _dark: '#0b161a' } },
  '2': { value: { _light: '#f2fafb', _dark: '#101b20' } },
  '3': { value: { _light: '#def7f9', _dark: '#082c36' } },
  '4': { value: { _light: '#caf1f6', _dark: '#003848' } },
  '5': { value: { _light: '#b5e9f0', _dark: '#004558' } },
  '6': { value: { _light: '#9ddde7', _dark: '#045468' } },
  '7': { value: { _light: '#7dcedc', _dark: '#12677e' } },
  '8': { value: { _light: '#3db9cf', _dark: '#11809c' } },
  '9': { value: { _light: '#00a2c7', _dark: '#00a2c7' } },
  '10': { value: { _light: '#0797b9', _dark: '#23afd0' } },
  '11': { value: { _light: '#107d98', _dark: '#4ccce6' } },
  '12': { value: { _light: '#0d3c48', _dark: '#b6ecf7' } },
  a1: { value: { _light: '#0099cc05', _dark: '#0091f70a' } },
  a2: { value: { _light: '#009db10d', _dark: '#02a7f211' } },
  a3: { value: { _light: '#00c2d121', _dark: '#00befd28' } },
  a4: { value: { _light: '#00bcd435', _dark: '#00baff3b' } },
  a5: { value: { _light: '#01b4cc4a', _dark: '#00befd4d' } },
  a6: { value: { _light: '#00a7c162', _dark: '#00c7fd5e' } },
  a7: { value: { _light: '#009fbb82', _dark: '#14cdff75' } },
  a8: { value: { _light: '#00a3c0c2', _dark: '#11cfff95' } },
  a9: { value: { _light: '#00a2c7', _dark: '#00cfffc3' } },
  a10: { value: { _light: '#0094b7f8', _dark: '#28d6ffcd' } },
  a11: { value: { _light: '#007491ef', _dark: '#52e1fee5' } },
  a12: { value: { _light: '#00323ef2', _dark: '#bbf3fef7' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.cyan.9}', _dark: '{colors.cyan.9}' } },
      hover: { value: { _light: '{colors.cyan.10}', _dark: '{colors.cyan.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.cyan.a3}', _dark: '{colors.cyan.a3}' } },
      hover: { value: { _light: '{colors.cyan.a4}', _dark: '{colors.cyan.a4}' } },
      active: { value: { _light: '{colors.cyan.a5}', _dark: '{colors.cyan.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.cyan.a11}', _dark: '{colors.cyan.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.cyan.a2}', _dark: '{colors.cyan.a2}' } },
      active: { value: { _light: '{colors.cyan.a3}', _dark: '{colors.cyan.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.cyan.a6}', _dark: '{colors.cyan.a6}' } },
      hover: { value: { _light: '{colors.cyan.a7}', _dark: '{colors.cyan.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.cyan.a11}', _dark: '{colors.cyan.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.cyan.a2}', _dark: '{colors.cyan.a2}' } },
      active: { value: { _light: '{colors.cyan.a3}', _dark: '{colors.cyan.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.cyan.a7}', _dark: '{colors.cyan.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.cyan.a11}', _dark: '{colors.cyan.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.cyan.a3}', _dark: '{colors.cyan.a3}' } },
      active: { value: { _light: '{colors.cyan.a4}', _dark: '{colors.cyan.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.cyan.a11}', _dark: '{colors.cyan.a11}' } } },
  },
})
