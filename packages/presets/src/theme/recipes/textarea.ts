import { defineRecipe } from '@pandacss/dev'

export const textarea = defineRecipe({
  className: 'textarea',
  description: 'A textarea style',
  base: {
    backgroundColor: 'bg.default',
    appearance: 'none',
    borderColor: 'border.emphasized',
    borderRadius: 'sm',
    borderWidth: '1px',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'border-color, box-shadow, outline',
    resize: 'none',
    width: 'full',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _focus: {
      borderColor: {
        base: 'neutral.700',
        _dark: 'neutral.500',
      },
      outline: '1px solid',
      outlineColor: {
        base: 'neutral.700',
        _dark: 'neutral.500',
      },
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
