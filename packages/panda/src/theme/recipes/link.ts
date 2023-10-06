import { defineRecipe } from '@pandacss/dev'

export const link = defineRecipe({
  className: 'link',
  base: {
    color: 'fg.subtle',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2',
    transitionDuration: 'normal',
    transitionProperty: 'color, font-weight',
    transitionTimingFunction: 'default',
  },
  defaultVariants: {
    variant: 'text',
  },
  variants: {
    variant: {
      text: {
        fontWeight: 'medium',
        color: 'fg.default',
        textDecoration: 'underline',
      },
      toc: {
        fontWeight: 'medium',
        textStyle: 'sm',
        _hover: {
          color: 'fg.muted',
        },
        _currentPage: {
          fontWeight: 'semibold',
          color: 'fg.emphasized',
          _hover: {
            color: 'fg.emphasized',
          },
        },
      },
      navbar: {
        fontWeight: 'semibold',
        textStyle: 'md',
        _hover: {
          color: 'fg.muted',
        },
        _currentPage: {
          color: 'fg.emphasized',
          _hover: {
            color: 'fg.emphasized',
          },
        },
      },
    },
  },
})
