import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const Badge = defineStyleConfig({
  baseStyle: defineStyle((props) => ({
    alignItems: 'center',
    borderRadius: 'full',
    colorPalette: 'accent',
    display: 'inline-flex',
    fontWeight: 'medium',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  })),
  defaultProps: {
    variant: 'subtle',
    size: 'md',
    colorScheme: 'accent',
  },
  sizes: {
    sm: { textStyle: 'xs', px: '2', h: '5', gap: '1', '& svg': { width: '3', height: '3' } },
    md: { textStyle: 'xs', px: '2.5', h: '6', gap: '1.5', '& svg': { width: '4', height: '4' } },
    lg: { textStyle: 'sm', px: '3', h: '7', gap: '1.5', '& svg': { width: '4', height: '4' } },
  },
  variants: {
    solid: defineStyle((props) => ({
      background: `${props.colorScheme}.default`,
      color: `${props.colorScheme}.fg`,
    })),
    subtle: defineStyle((props) => ({
      background: 'bg.subtle',
      borderColor: 'border.subtle',
      borderWidth: '1px',
      color: 'fg.default',
      '& svg': { color: 'fg.muted' },
    })),
    outline: defineStyle((props) => ({ borderWidth: '2px', borderColor: 'border.default' })),
  },
})
