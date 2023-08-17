import { defineRecipe } from '@pandacss/dev'

export const code = defineRecipe({
  className: 'code',
  description: 'An code style',
  base: {
    alignItems: 'center',
    bg: 'bg.subtle',
    borderRadius: 'l2',
    borderWidth: '1px',
    color: 'fg.default',
    display: 'inline-flex',
    fontFamily: 'var(--font-code)',
    fontWeight: 'medium',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        height: '5',
        px: '0.5',
        textStyle: 'xs',
      },
      md: {
        height: '6',
        px: '1',
        textStyle: 'sm',
      },
      lg: {
        height: '7',
        px: '1.5',
        textStyle: 'md',
      },
    },
  },
})
