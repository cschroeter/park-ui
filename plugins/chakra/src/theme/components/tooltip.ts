import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'trigger',
  'arrow',
  'arrowTip',
  'positioner',
  'content',
])

export const Tooltip = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    content: {
      background: 'gray.a12',
      borderRadius: 'l2',
      boxShadow: 'sm',
      color: 'bg.default',
      fontWeight: 'semibold',
      px: '3',
      py: '2',
      textStyle: 'xs',
      maxWidth: '2xs',
      _open: { animation: 'fadeIn 0.25s ease-out' },
      _closed: { animation: 'fadeOut 0.2s ease-out' },
    },
  }),
  defaultProps: { colorScheme: 'accent' },
  sizes: {},
  variants: {},
})
