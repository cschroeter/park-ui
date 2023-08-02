import { carouselAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(carouselAnatomy.build())

export const carousel = defineRecipe({
  className: 'carousel',
  description: 'A carousel style',
  base: parts({
    viewport: {
      overflowX: 'hidden',
      position: 'relative',
      borderRadius: 'sm',
    },
    control: {
      background: 'white',
      borderRadius: 'sm',
      bottom: '4',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '1',
      opacity: '0.9',
    },
    indicatorGroup: {
      display: 'flex',
    },
    indicator: {
      borderRadius: 'full',
      background: 'neutral.200',
      cursor: 'pointer',
      _current: {
        background: 'neutral.950',
      },
      _focusVisible: {
        outlineOffset: '2px',
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
          gap: '1',
          p: '1',
        },
        indicatorGroup: {
          gap: '2',
        },
        indicator: {
          width: '2',
          height: '2',
        },
      }),
      md: parts({
        control: {
          gap: '2',
          p: '2.5',
        },
        indicatorGroup: {
          gap: '3',
        },
        indicator: {
          width: '2.5',
          height: '2.5',
        },
      }),
    },
  },
})
