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
      transitionDuration: 'normal',
      transitionProperty: 'color, fill',
      transitionTimingFunction: 'default',

      color: 'var(--colors-bg-emphasized)',
      fill: 'var(--colors-bg-emphasized)',
      _highlighted: {
        color: 'var(--colors-accent-default)',
        fill: 'var(--colors-accent-default)',
      },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'border.outline',
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
