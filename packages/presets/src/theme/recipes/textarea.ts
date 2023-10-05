import { defineRecipe } from '@pandacss/dev'

export const textarea = defineRecipe({
  className: 'textarea',
  base: {
    backgroundColor: 'bg.default',
    appearance: 'none',
    borderColor: 'border.emphasized',
    borderRadius: 'l2',
    borderWidth: '1px',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'border-color, box-shadow',
    width: 'full',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _focus: {
      borderColor: 'border.accent',
      boxShadow: 'accent',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: { p: '2.5', fontSize: 'sm' },
      md: { p: '3', fontSize: 'md' },
      lg: { p: '3.5', fontSize: 'md' },
      xl: { p: '4', fontSize: 'md' },
    },
  },
})
