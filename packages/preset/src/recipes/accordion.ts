import { accordionAnatomy } from '@ark-ui/react/accordion'
import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'accordion',
  slots: accordionAnatomy.extendWith('itemBody').keys(),
  base: {
    root: {
      width: 'full',
      '--accordion-radius': 'radii.l2',
    },
    item: {
      overflowAnchor: 'none',
    },
    itemTrigger: {
      alignItems: 'center',
      borderRadius: 'var(--accordion-radius)',
      color: 'fg.default',
      cursor: 'pointer',
      display: 'flex',
      fontWeight: 'semibold',
      gap: '3',
      justifyContent: 'space-between',
      textAlign: 'start',
      textStyle: 'lg',
      width: 'full',
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'colorPalette.focusRing',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    itemIndicator: {
      transition: 'rotate 0.2s',
      transformOrigin: 'center',
      color: 'fg.subtle',
      _open: {
        rotate: '180deg',
      },
      _icon: {
        width: '1.2em',
        height: '1.2em',
      },
    },
    itemBody: {
      pb: 'calc(var(--accordion-padding-y) * 2)',
      color: 'fg.muted',
    },
    itemContent: {
      overflow: 'hidden',
      borderRadius: 'var(--accordion-radius)',
      _open: {
        animationName: 'expand-height, fade-in',
        animationDuration: 'normal',
      },
      _closed: {
        animationName: 'collapse-height, fade-out',
        animationDuration: 'normal',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        item: {
          borderBottomWidth: '1px',
        },
      },
      plain: {},
    },
    size: {
      md: {
        root: {
          '--accordion-padding-x': 'spacing.4',
          '--accordion-padding-y': 'spacing.2.5',
        },
        itemTrigger: {
          textStyle: 'md',
          py: 'var(--accordion-padding-y)',
        },
      },
    },
  },
})
