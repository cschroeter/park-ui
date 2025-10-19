import { defineSemanticTokens } from '@pandacss/dev'

export const ruby = defineSemanticTokens.colors({
  '1': { value: { _light: '#fffcfd', _dark: '#191113' } },
  '2': { value: { _light: '#fff7f8', _dark: '#1e1517' } },
  '3': { value: { _light: '#feeaed', _dark: '#3a141e' } },
  '4': { value: { _light: '#ffdce1', _dark: '#4e1325' } },
  '5': { value: { _light: '#ffced6', _dark: '#5e1a2e' } },
  '6': { value: { _light: '#f8bfc8', _dark: '#6f2539' } },
  '7': { value: { _light: '#efacb8', _dark: '#883447' } },
  '8': { value: { _light: '#e592a3', _dark: '#b3445a' } },
  '9': { value: { _light: '#e54666', _dark: '#e54666' } },
  '10': { value: { _light: '#dc3b5d', _dark: '#ec5a72' } },
  '11': { value: { _light: '#ca244d', _dark: '#ff949d' } },
  '12': { value: { _light: '#64172b', _dark: '#fed2e1' } },
  a1: { value: { _light: '#ff005503', _dark: '#f4124a09' } },
  a2: { value: { _light: '#ff002008', _dark: '#fe5a7f0e' } },
  a3: { value: { _light: '#f3002515', _dark: '#ff235d2c' } },
  a4: { value: { _light: '#ff002523', _dark: '#fd195e42' } },
  a5: { value: { _light: '#ff002a31', _dark: '#fe2d6b53' } },
  a6: { value: { _light: '#e4002440', _dark: '#ff447665' } },
  a7: { value: { _light: '#ce002553', _dark: '#ff577d80' } },
  a8: { value: { _light: '#c300286d', _dark: '#ff5c7cae' } },
  a9: { value: { _light: '#db002cb9', _dark: '#fe4c70e4' } },
  a10: { value: { _light: '#d2002cc4', _dark: '#ff617beb' } },
  a11: { value: { _light: '#c10030db', _dark: '#ff949d' } },
  a12: { value: { _light: '#550016e8', _dark: '#ffd3e2fe' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.ruby.9}', _dark: '{colors.ruby.9}' } },
      hover: { value: { _light: '{colors.ruby.10}', _dark: '{colors.ruby.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.ruby.a3}', _dark: '{colors.ruby.a3}' } },
      hover: { value: { _light: '{colors.ruby.a4}', _dark: '{colors.ruby.a4}' } },
      active: { value: { _light: '{colors.ruby.a5}', _dark: '{colors.ruby.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.ruby.a11}', _dark: '{colors.ruby.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.ruby.a2}', _dark: '{colors.ruby.a2}' } },
      active: { value: { _light: '{colors.ruby.a3}', _dark: '{colors.ruby.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.ruby.a6}', _dark: '{colors.ruby.a6}' } },
      hover: { value: { _light: '{colors.ruby.a7}', _dark: '{colors.ruby.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.ruby.a11}', _dark: '{colors.ruby.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.ruby.a2}', _dark: '{colors.ruby.a2}' } },
      active: { value: { _light: '{colors.ruby.a3}', _dark: '{colors.ruby.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.ruby.a7}', _dark: '{colors.ruby.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.ruby.a11}', _dark: '{colors.ruby.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.ruby.a3}', _dark: '{colors.ruby.a3}' } },
      active: { value: { _light: '{colors.ruby.a4}', _dark: '{colors.ruby.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.ruby.a11}', _dark: '{colors.ruby.a11}' } } },
  },
})
