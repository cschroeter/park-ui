import { carouselAnatomy } from '@ark-ui/react/carousel'
import { defineSlotRecipe } from '@pandacss/dev'

export const carousel = defineSlotRecipe({
  className: 'carousel',
  slots: carouselAnatomy.keys(),
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      _vertical: {
        flexDirection: 'row',
      },
    },
    control: {
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 'l2',
      display: 'flex',
      _vertical: {
        flexDirection: 'column',
      },
    },
    itemGroup: {
      flex: '1',
    },
    indicatorGroup: {
      display: 'flex',
      _vertical: {
        flexDirection: 'column',
      },
    },
    indicator: {
      borderRadius: 'full',
      background: 'gray.subtle.bg',
      cursor: 'pointer',
      _current: {
        background: 'colorPalette.solid.bg',
      },
      focusVisibleRing: 'outside',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    inline: {
      true: {
        control: {
          background: { _light: 'white.a11', _dark: 'black.a11' },
          bottom: '3',
          left: '50%',
          p: '1',
          position: 'absolute',
          transform: 'translateX(-50%)',
        },
      },
    },
    size: {
      md: {
        control: {
          gap: '3',
        },
        indicatorGroup: {
          gap: '3',
        },
        indicator: {
          boxSize: '2.5',
        },
      },
    },
  },
})
