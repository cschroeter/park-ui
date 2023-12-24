import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'header',
  'body',
  'footer',
  'title',
  'description',
])

export const Card = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      bg: 'bg.default',
      borderRadius: 'l3',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    header: { display: 'flex', flexDirection: 'column', gap: '1', p: '6' },
    body: { display: 'flex', flex: '1', flexDirection: 'column', pb: '6', px: '6' },
    footer: { display: 'flex', justifyContent: 'flex-end', pb: '6', pt: '2', px: '6' },
    title: { color: 'fg.default', textStyle: 'lg', fontWeight: 'semibold' },
    description: { color: 'fg.muted', textStyle: 'sm' },
  }),
  defaultProps: { colorScheme: 'accent' },
  sizes: {},
  variants: {},
})
