import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'group',
  'root',
  'title',
  'description',
  'closeTrigger',
])

export const Toast = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      background: 'bg.default',
      borderRadius: 'l3',
      boxShadow: 'lg',
      minWidth: 'xs',
      p: '4',
      position: 'relative',
      _open: { animation: 'slideInFromBottom 0.2s ease-out' },
      _closed: { animation: 'slideOutFromBottom 0.2s ease-out' },
    },
    group: { p: '4' },
    title: { color: 'fg.default', fontWeight: 'semibold', textStyle: 'sm' },
    description: { color: 'fg.muted', textStyle: 'sm' },
    closeTrigger: { position: 'absolute', top: '3', right: '3' },
  }),
  defaultProps: {},
  sizes: {},
  variants: {},
})
