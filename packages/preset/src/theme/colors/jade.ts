import { defineSemanticTokens } from '@pandacss/dev'

export const jade = defineSemanticTokens.colors({
  '1': { value: { _light: '#fbfefd', _dark: '#0d1512' } },
  '2': { value: { _light: '#f4fbf7', _dark: '#121c18' } },
  '3': { value: { _light: '#e6f7ed', _dark: '#0f2e22' } },
  '4': { value: { _light: '#d6f1e3', _dark: '#0b3b2c' } },
  '5': { value: { _light: '#c3e9d7', _dark: '#114837' } },
  '6': { value: { _light: '#acdec8', _dark: '#1b5745' } },
  '7': { value: { _light: '#8bceb6', _dark: '#246854' } },
  '8': { value: { _light: '#56ba9f', _dark: '#2a7e68' } },
  '9': { value: { _light: '#29a383', _dark: '#29a383' } },
  '10': { value: { _light: '#26997b', _dark: '#27b08b' } },
  '11': { value: { _light: '#208368', _dark: '#1fd8a4' } },
  '12': { value: { _light: '#1d3b31', _dark: '#adf0d4' } },
  a1: { value: { _light: '#00c08004', _dark: '#00de4505' } },
  a2: { value: { _light: '#00a3460b', _dark: '#27fba60c' } },
  a3: { value: { _light: '#00ae4819', _dark: '#02f99920' } },
  a4: { value: { _light: '#00a85129', _dark: '#00ffaa2d' } },
  a5: { value: { _light: '#00a2553c', _dark: '#11ffb63b' } },
  a6: { value: { _light: '#009a5753', _dark: '#34ffc24b' } },
  a7: { value: { _light: '#00945f74', _dark: '#45fdc75e' } },
  a8: { value: { _light: '#00976ea9', _dark: '#48ffcf75' } },
  a9: { value: { _light: '#00916bd6', _dark: '#38feca9d' } },
  a10: { value: { _light: '#008764d9', _dark: '#31fec7ab' } },
  a11: { value: { _light: '#007152df', _dark: '#21fec0d6' } },
  a12: { value: { _light: '#002217e2', _dark: '#b8ffe1ef' } },
  solid: {
    bg: {
      DEFAULT: { value: { _light: '{colors.jade.9}', _dark: '{colors.jade.9}' } },
      hover: { value: { _light: '{colors.jade.10}', _dark: '{colors.jade.10}' } },
    },
    fg: { DEFAULT: { value: { _light: 'white', _dark: 'white' } } },
  },
  subtle: {
    bg: {
      DEFAULT: { value: { _light: '{colors.jade.a3}', _dark: '{colors.jade.a3}' } },
      hover: { value: { _light: '{colors.jade.a4}', _dark: '{colors.jade.a4}' } },
      active: { value: { _light: '{colors.jade.a5}', _dark: '{colors.jade.a5}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.jade.a11}', _dark: '{colors.jade.a11}' } } },
  },
  surface: {
    bg: {
      DEFAULT: { value: { _light: '{colors.jade.a2}', _dark: '{colors.jade.a2}' } },
      active: { value: { _light: '{colors.jade.a3}', _dark: '{colors.jade.a3}' } },
    },
    border: {
      DEFAULT: { value: { _light: '{colors.jade.a6}', _dark: '{colors.jade.a6}' } },
      hover: { value: { _light: '{colors.jade.a7}', _dark: '{colors.jade.a7}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.jade.a11}', _dark: '{colors.jade.a11}' } } },
  },
  outline: {
    bg: {
      hover: { value: { _light: '{colors.jade.a2}', _dark: '{colors.jade.a2}' } },
      active: { value: { _light: '{colors.jade.a3}', _dark: '{colors.jade.a3}' } },
    },
    border: { DEFAULT: { value: { _light: '{colors.jade.a7}', _dark: '{colors.jade.a7}' } } },
    fg: { DEFAULT: { value: { _light: '{colors.jade.a11}', _dark: '{colors.jade.a11}' } } },
  },
  plain: {
    bg: {
      hover: { value: { _light: '{colors.jade.a3}', _dark: '{colors.jade.a3}' } },
      active: { value: { _light: '{colors.jade.a4}', _dark: '{colors.jade.a4}' } },
    },
    fg: { DEFAULT: { value: { _light: '{colors.jade.a11}', _dark: '{colors.jade.a11}' } } },
  },
})
