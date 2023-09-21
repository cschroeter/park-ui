import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
  className: 'input',
  base: {
    appearance: 'none',
    backgroundColor: 'bg.default',
    borderColor: 'border.emphasized',
    borderRadius: 'l2',
    borderWidth: '1px',
    outline: 0,
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'box-shadow, border-color',
    transitionTimingFunction: 'default',
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
      '2xs': { px: '1.5', h: '7', minW: '7', fontSize: 'xs' },
      xs: { px: '2', h: '8', minW: '8', fontSize: 'xs' },
      sm: { px: '2.5', h: '9', minW: '9', fontSize: 'sm' },
      md: { px: '3', h: '10', minW: '10', fontSize: 'md' },
      lg: { px: '3.5', h: '11', minW: '11', fontSize: 'md' },
      xl: { px: '4', h: '12', minW: '12', fontSize: 'lg' },
      '2xl': { px: '2', h: '16', minW: '16', textStyle: '3xl' },
    },
  },
})
