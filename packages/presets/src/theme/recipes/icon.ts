import { defineRecipe } from '@pandacss/dev'

export const icon = defineRecipe({
  className: 'icon',
  base: {
    color: 'currentcolor',
    display: 'inline-block',
    flexShrink: '0',
    verticalAlign: 'middle',
    lineHeight: '1em',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: {
        w: '4',
        h: '4',
      },
      sm: {
        w: '5',
        h: '5',
      },
      md: {
        w: '6',
        h: '6',
      },
      lg: {
        w: '7',
        h: '7',
      },
      xl: {
        w: '8',
        h: '8',
      },
    },
  },
})
