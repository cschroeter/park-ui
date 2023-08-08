import { sliderAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(sliderAnatomy.build())

export const slider = defineRecipe({
  className: 'slider',
  description: 'A slider style',
  base: parts({
    root: {
      width: 'full',
    },
    control: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    track: {
      backgroundColor: 'bg.muted',
      borderRadius: 'sm',
      flex: '1',
    },
    range: {
      background: 'accent.default',
      borderRadius: 'sm',
    },
    thumb: {
      background: 'bg.default',
      borderColor: 'border.accent',
      borderRadius: 'full',
      borderWidth: '2px',
      boxShadow: 'sm',
      outline: 'none',
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: parts({
        control: {
          py: '2',
        },
        range: {
          height: '2',
        },
        track: {
          height: '2',
        },
        thumb: {
          height: '6',
          width: '6',
        },
        marker: {
          mt: '2',
          textStyle: 'md',
        },
      }),
    },
  },
})
