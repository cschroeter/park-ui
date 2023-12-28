import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'label',
  'input',
  'control',
])

export const PinInput = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    root: { display: 'flex', flexDirection: 'column', gap: '1.5' },
    control: { display: 'flex', gap: '2' },
    label: { color: 'fg.default', fontWeight: 'medium' },
  })),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    sm: { label: { textStyle: 'sm' } },
    md: { label: { textStyle: 'sm' } },
    lg: { label: { textStyle: 'sm' } },
    xl: { label: { textStyle: 'md' } },
  },
  variants: {},
})
