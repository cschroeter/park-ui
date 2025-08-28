import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  'slide-to-left-full': {
    from: { translate: '0 0' },
    to: { translate: '-100% 0' },
  },
  'slide-to-right-full': {
    from: { translate: '0 0' },
    to: { translate: '100% 0' },
  },
  'slide-to-top-full': {
    from: { translate: '0 0' },
    to: { translate: '0 -100%' },
  },
  'slide-to-bottom-full': {
    from: { translate: '0 0' },
    to: { translate: '0 100%' },
  },
  'slide-from-left-full': {
    from: { translate: '-100% 0' },
    to: { translate: '0 0' },
  },
  'slide-from-right-full': {
    from: { translate: '100% 0' },
    to: { translate: '0 0' },
  },
  'slide-from-top-full': {
    from: { translate: '0 -100%' },
    to: { translate: '0 0' },
  },
  'slide-from-bottom-full': {
    from: { translate: '0 100%' },
    to: { translate: '0 0' },
  },
  'fade-in': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  'fade-out': {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
})
