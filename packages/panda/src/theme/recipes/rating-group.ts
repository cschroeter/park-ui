import { ratingGroupAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const ratingGroup = defineSlotRecipe({
  className: 'ratingGroup',
  slots: ratingGroupAnatomy.keys(),
  jsx: ['RatingGroup', /RatingGroup\.+/],
  base: {
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
        outlineColor: 'border.accent',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        control: {
          gap: '0',
        },
        rating: {
          '& svg': {
            width: '4',
            height: '4',
          },
        },
      },
      md: {
        control: {
          gap: '0.5',
        },
        rating: {
          '& svg': {
            width: '5',
            height: '5',
          },
        },
      },
      lg: {
        control: {
          gap: '0.5',
        },
        rating: {
          '& svg': {
            width: '6',
            height: '6',
          },
        },
      },
    },
  },
})
