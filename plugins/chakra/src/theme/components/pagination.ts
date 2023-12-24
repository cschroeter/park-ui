import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'item',
  'ellipsis',
  'prevTrigger',
  'nextTrigger',
])

export const Pagination = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: { display: 'flex', justifyContent: 'space-between', gap: '4' },
    item: { fontVariantNumeric: 'tabular-nums' },
    ellipsis: {
      alignItems: 'center',
      color: 'fg.default',
      display: 'inline-flex',
      fontWeight: 'semibold',
      px: '2',
    },
  }),
  defaultProps: { colorScheme: 'accent' },
  sizes: {},
  variants: {},
})
