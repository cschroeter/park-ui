import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  fadeIn: {
    '0%': { opacity: '0', transform: 'translateY(-4px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  fadeOut: {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(-4px)' },
  },
  slideInFromBottom: {
    '0%': { opacity: '0', transform: 'translateY(4px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  slideOutToBottom: {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(4px)' },
  },
  backdropIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  backdropOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  slideIn: {
    '0%': { opacity: '0', transform: 'translateY(64px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  slideOut: {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(64px)' },
  },

  drawerIn: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0%)' },
  },
  drawerOut: {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
})
