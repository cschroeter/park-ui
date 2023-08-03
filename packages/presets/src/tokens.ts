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
  easings: {
    default: { value: 'cubic-bezier(0.2, 0.0, 0, 1.0)' },
    'emphasized-in': { value: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)' },
    'emphasized-out': { value: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)' },
  },
  animations: {
    'backdrop-in': {
      value: 'fade-in 250ms var(--easings-default)',
    },
    'backdrop-out': {
      value: 'fade-out 200ms var(--easings-default)',
    },
    'dialog-in': {
      value: 'slide-in 400ms var(--easings-emphasized-in)',
    },
    'dialog-out': {
      value: 'slide-out 200ms var(--easings-emphasized-out)',
    },
    'drawer-in-left': {
      value: 'slide-in-left 400ms var(--easings-emphasized-in)',
    },
    'drawer-out-left': {
      value: 'slide-out-left 200ms var(--easings-emphasized-out)',
    },
    'drawer-in-right': {
      value: 'slide-in-right 400ms var(--easings-emphasized-in)',
    },
    'drawer-out-right': {
      value: 'slide-out-right 200ms var(--easings-emphasized-out)',
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
