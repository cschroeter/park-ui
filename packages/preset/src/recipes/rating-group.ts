import { ratingGroupAnatomy } from '@ark-ui/react/rating-group/'
import { defineSlotRecipe } from '@pandacss/dev'

export const ratingGroup = defineSlotRecipe({
  className: 'rating-group',
  slots: ratingGroupAnatomy.extendWith('itemIndicator').keys(),
  base: {
    root: {
      alignItems: 'center',
      display: 'inline-flex',
      verticalAlign: 'top',
    },
    control: {
      alignItems: 'center',
      display: 'inline-flex',
      gap: '0.5',
    },
    item: {
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      userSelect: 'none',
    },
    label: {
      fontWeight: 'medium',
      userSelect: 'none',
    },
    itemIndicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      '--clip-path': { base: 'inset(0 50% 0 0)', _rtl: 'inset(0 0 0 50%)' },
      _icon: {
        stroke: 'currentColor',
        display: 'inline-block',
        flexShrink: 0,
        position: 'absolute',
        width: 'inherit',
        height: 'inherit',
        left: 0,
        top: 0,
      },
      '& [data-bg]': {
        color: 'bg.muted',
      },
      '& [data-fg]': {
        color: 'transparent',
      },
      '&[data-highlighted]:not([data-half])': {
        '& [data-fg]': {
          color: 'colorPalette.solid.bg',
        },
      },
      '&[data-half]': {
        '& [data-fg]': {
          color: 'colorPalette.solid.bg',
          clipPath: 'var(--clip-path)',
        },
      },
    },
  },

  variants: {
    size: {
      xs: { root: { gap: '2' }, itemIndicator: { width: '4', height: '4' } },
      sm: { root: { gap: '2' }, itemIndicator: { width: '4.5', height: '4.5' } },
      md: { root: { gap: '3' }, itemIndicator: { width: '5', height: '5' } },
      lg: { root: { gap: '3' }, itemIndicator: { width: '5.5', height: '5.5' } },
      xl: { root: { gap: '3' }, itemIndicator: { width: '6', height: '6' } },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
