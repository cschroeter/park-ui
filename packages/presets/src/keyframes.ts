import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  'fade-out': {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  'slide-in': {
    '0%': { opacity: '0', transform: 'translateY(64px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-out': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(64px)' },
  },
  'slide-in-left': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0%)' },
  },
  'slide-out-left': {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
  'slide-in-right': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0%)' },
  },
  'slide-out-right': {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(100%)' },
  },

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
})
