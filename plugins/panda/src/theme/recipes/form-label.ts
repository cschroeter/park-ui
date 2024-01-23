import { defineRecipe } from '@pandacss/dev'

export const formLabel = defineRecipe({
  className: 'formLabel',
  base: {
    color: 'fg.default',
    fontWeight: 'medium',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        textStyle: 'sm',
      },
      md: {
        textStyle: 'md',
      },
      lg: {
        textStyle: 'lg',
      },
      xl: {
        textStyle: 'xl',
      },
    },
  },
})
