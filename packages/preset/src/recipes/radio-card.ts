import { radioGroupAnatomy } from '@ark-ui/react/radio-group'
import { defineSlotRecipe } from '@pandacss/dev'

export const radioCard = defineSlotRecipe({
  className: 'radio-card',
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      isolation: 'isolate',
    },
    item: {
      borderRadius: 'l2',
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      position: 'relative',
      userSelect: 'none',

      // TODO rm
      p: '4',
      _checked: {
        zIndex: '1',
      },
    },
    // label: {
    //   display: 'inline-flex',
    //   fontWeight: 'medium',
    //   textStyle: 'sm',
    //   _disabled: {
    //     opacity: '0.5',
    //   },
    // },
    // itemText: {
    //   fontWeight: 'medium',
    //   flex: '1',
    // },
    // itemDescription: {
    //   opacity: '0.64',
    //   textStyle: 'sm',
    // },
    // itemControl: {
    //   display: 'inline-flex',
    //   flex: '1',
    //   pos: 'relative',
    //   rounded: 'inherit',
    //   justifyContent: 'var(--radio-card-justify)',
    //   alignItems: 'var(--radio-card-align)',
    //   _disabled: {
    //     bg: 'bg.muted',
    //   },
    // },
    // itemIndicator: radiomarkRecipe.base,
    // itemAddon: {
    //   roundedBottom: 'inherit',
    //   _disabled: {
    //     color: 'fg.muted',
    //   },
    // },
    // itemContent: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   flex: '1',
    //   gap: '1',
    //   justifyContent: 'var(--radio-card-justify)',
    //   alignItems: 'var(--radio-card-align)',
    // },
  },

  variants: {
    // size: {
    //   sm: {
    //     item: {
    //       textStyle: 'sm',
    //     },
    //     itemControl: {
    //       padding: '3',
    //       gap: '1.5',
    //     },
    //     itemAddon: {
    //       px: '3',
    //       py: '1.5',
    //       borderTopWidth: '1px',
    //     },
    //     itemIndicator: radiomarkRecipe.variants?.size.sm,
    //   },
    //   md: {
    //     item: {
    //       textStyle: 'sm',
    //     },
    //     itemControl: {
    //       padding: '4',
    //       gap: '2.5',
    //     },
    //     itemAddon: {
    //       px: '4',
    //       py: '2',
    //       borderTopWidth: '1px',
    //     },
    //     itemIndicator: radiomarkRecipe.variants?.size.md,
    //   },
    //   lg: {
    //     item: {
    //       textStyle: 'md',
    //     },
    //     itemControl: {
    //       padding: '4',
    //       gap: '3.5',
    //     },
    //     itemAddon: {
    //       px: '4',
    //       py: '2',
    //       borderTopWidth: '1px',
    //     },
    //     itemIndicator: radiomarkRecipe.variants?.size.lg,
    //   },
    // },
    variant: {
      subtle: {
        item: {
          bg: 'gray.subtle.bg',
          color: 'gray.subtle.fg',
          _checked: {
            bg: 'colorPalette.subtle.bg',
            color: 'colorPalette.subtle.fg',
          },
        },
        itemControl: {},
        // itemIndicator: radiomarkRecipe.variants?.variant.outline,
      },
      outline: {
        item: {
          borderWidth: '1px',
          _checked: {
            boxShadow: '0 0 0 1px var(--shadow-color)',
            boxShadowColor: 'colorPalette.solid.bg',
            borderColor: 'colorPalette.solid.bg',
          },
        },
        // itemIndicator: radiomarkRecipe.variants?.variant.solid,
      },
      surface: {
        item: {
          borderWidth: '1px',
          bg: 'gray.surface.bg',
          borderColor: 'gray.surface.border',
          color: 'gray.surface.fg',
          _checked: {
            bg: 'colorPalette.surface.bg',
            borderColor: 'colorPalette.surface.border',
            color: 'colorPalette.surface.fg',
          },
        },
        //     itemIndicator: radiomarkRecipe.variants?.variant.solid,
      },
      solid: {
        item: {
          borderWidth: '1px',
          _checked: {
            bg: 'colorPalette.solid.bg',
            color: 'colorPalette.solid.fg',
            borderColor: 'colorPalette.solid.bg',
          },
        },
        // itemIndicator: radiomarkRecipe.variants?.variant.inverted,
      },
    },
    // justify: {
    //   start: {
    //     item: { '--radio-card-justify': 'flex-start' },
    //   },
    //   end: {
    //     item: { '--radio-card-justify': 'flex-end' },
    //   },
    //   center: {
    //     item: { '--radio-card-justify': 'center' },
    //   },
    // },
    // align: {
    //   start: {
    //     item: { '--radio-card-align': 'flex-start' },
    //     itemControl: { textAlign: 'start' },
    //   },
    //   end: {
    //     item: { '--radio-card-align': 'flex-end' },
    //     itemControl: { textAlign: 'end' },
    //   },
    //   center: {
    //     item: { '--radio-card-align': 'center' },
    //     itemControl: { textAlign: 'center' },
    //   },
    // },
    orientation: {
      vertical: {
        itemControl: { flexDirection: 'column' },
      },
      horizontal: {
        itemControl: { flexDirection: 'row' },
      },
    },
  },

  defaultVariants: {
    // size: 'md',
    variant: 'surface',
    // align: 'start',
    orientation: 'horizontal',
  },
})
