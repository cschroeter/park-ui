import { defineRecipe } from '@pandacss/dev'

export const link = defineRecipe({
  className: 'link',
  description: 'A link style',
  base: {
    color: 'fg.subtle',
    transitionDuration: 'fast',
    transitionProperty: 'color, font-weight',
    transitionTimingFunction: 'ease-out',
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
        textStyle: 'sm',
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
