import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'content',
  'description',
  'icon',
  'title',
])

export const Alert = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    root: {
      background: 'bg.default',
      borderWidth: '1px',
      borderRadius: 'l3',
      display: 'flex',
      gap: '3',
      p: '4',
      width: 'full',
    },
    content: { display: 'flex', flexDirection: 'column', gap: '1' },
    description: { color: 'fg.muted', textStyle: 'sm' },
    icon: { color: 'fg.default', flexShrink: '0', width: '5', height: '5' },
    title: { color: 'fg.default', fontWeight: 'semibold', textStyle: 'sm' },
  })),
  defaultProps: { colorScheme: 'accent' },
  sizes: {},
  variants: {},
})
