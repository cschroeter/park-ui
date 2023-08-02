import { defineRecipe } from '@pandacss/dev'

export const badge = defineRecipe({
  className: 'badge',
  description: 'A badge style',
  base: {
    borderRadius: 'full',
    fontWeight: 'medium',
    display: 'inline-flex',
    alignItems: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        background: 'bg.accent',
        color: 'fg.accent',
      },
      subtle: {
        background: 'bg.subtle',
        borderColor: 'border.default',
        borderWidth: '1px',
        color: 'fg.emphasized',
      },
      outline: {
        borderWidth: '2px',
        borderColor: 'border.emphasized',
      },
    },
    size: {
      sm: { textStyle: 'xs', px: '2', h: '5', gap: '1' },
      md: { textStyle: 'sm', px: '2.5', h: '6', gap: '1.5' },
      lg: { textStyle: 'sm', px: '3', h: '7', gap: '1.5' },
    },
  },
})
