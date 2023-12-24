import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const Code = defineStyleConfig({
  baseStyle: defineStyle((props) => ({
    alignItems: 'center',
    bg: 'bg.subtle',
    borderRadius: 'l2',
    color: 'fg.default',
    display: 'inline-flex',
    fontWeight: 'medium!',
    fontFamily: 'var(--fonts-code)',
  })),
  defaultProps: {
    size: 'md',
    variant: 'outline',
    colorScheme: 'accent',
  },
  sizes: {
    sm: { minHeight: '5', px: '0.5', textStyle: 'xs' },
    md: { minHeight: '6', textStyle: 'sm', px: '1', py: '1px' },
    lg: { minHeight: '7', px: '1.5', py: '1px', textStyle: 'md' },
  },
  variants: {
    outline: defineStyle((props) => ({ borderWidth: '1px' })),
    ghost: defineStyle((props) => ({})),
  },
})
