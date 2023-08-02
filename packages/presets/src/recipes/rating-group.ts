import { ratingGroupAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(ratingGroupAnatomy.build())

export const ratingGroup = defineRecipe({
  className: 'ratingGroup',
  description: 'A rating group style',
  base: parts({
    control: {
      display: 'flex',
    },
    rating: {
      cursor: 'pointer',
      transitionDuration: 'faster',
      transitionProperty: 'color, fill',
      transitionTimingFunction: 'ease-out',
      _readOnly: {
        cursor: 'default',
      },

      '--color-active': {
        base: 'colors.gray.950',
        _dark: 'colors.white',
      },
      '--color-inactive': {
        base: 'colors.neutral.300',
        _dark: 'colors.neutral.700',
      },

      color: 'var(--color-inactive)',
      fill: 'var(--color-inactive)',

      _highlighted: {
        color: 'var(--color-active)',
        fill: 'var(--color-active)',
      },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'neutral.500',
      },
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: parts({
        control: {
          gap: '0',
        },
        rating: {
          '& svg': {
            width: '4',
            height: '4',
          },
        },
      }),
      md: parts({
        control: {
          gap: '0.5',
        },
        rating: {
          '& svg': {
            width: '5',
            height: '5',
          },
        },
      }),
      lg: parts({
        control: {
          gap: '0.5',
        },
        rating: {
          '& svg': {
            width: '6',
            height: '6',
          },
        },
      }),
    },
  },
})
