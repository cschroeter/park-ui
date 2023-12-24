import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'arrow',
  'arrowTip',
  'trigger',
  'positioner',
  'content',
])

export const HoverCard = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    content: {
      '--hover-card-background': 'colors.bg.default',
      background: 'var(--hover-card-background)',
      borderRadius: 'l3',
      boxShadow: 'lg',
      maxW: '80',
      p: '4',
      position: 'relative',
      _open: { animation: 'fadeIn 0.25s ease-out' },
      _closed: { animation: 'fadeOut 0.2s ease-out' },
    },
    arrow: { '--arrow-size': '12px', '--arrow-background': 'var(--hover-card-background)' },
    arrowTip: { borderTopWidth: '1px', borderLeftWidth: '1px' },
  }),
  defaultProps: { colorScheme: 'accent' },
  sizes: {},
  variants: {},
})
