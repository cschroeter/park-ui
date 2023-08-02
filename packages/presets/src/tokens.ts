import { defineTokens } from '@pandacss/dev'

export const tokens = defineTokens({
  lineHeights: {
    none: { value: '1' },
    tight: { value: '1.25' },
    normal: { value: '1.5' },
    relaxed: { value: '1.75' },
    loose: { value: '2' },
  },
  colors: {
    neutral: {
      25: { value: '#fefefe' },
      50: { value: '#fafafa' },
      100: { value: '#f5f5f5' },
      200: { value: '#e5e5e5' },
      300: { value: '#d4d4d4' },
      400: { value: '#a3a3a3' },
      500: { value: '#737373' },
      600: { value: '#525252' },
      700: { value: '#404040' },
      800: { value: '#262626' },
      900: { value: '#171717' },
      950: { value: '#0a0a0a' },
    },
  },
  zIndex: {
    hide: {
      value: -1,
    },
    base: {
      value: 0,
    },
    docked: {
      value: 10,
    },
    dropdown: {
      value: 1000,
    },
    sticky: {
      value: 1100,
    },
    banner: {
      value: 1200,
    },
    overlay: {
      value: 1300,
    },
    modal: {
      value: 1400,
    },
    popover: {
      value: 1500,
    },
    skipLink: {
      value: 1600,
    },
    toast: {
      value: 1700,
    },
    tooltip: {
      value: 1800,
    },
  },
})
