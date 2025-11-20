import { radioGroupAnatomy } from '@ark-ui/react/radio-group'
import { defineSlotRecipe } from '@pandacss/dev'

export const radioCardGroup = defineSlotRecipe({
  className: 'radio-card-group',
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },
    item: {
      alignItems: 'center',
      borderRadius: 'l2',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      userSelect: 'none',
      width: 'full',
    },
    label: {
      textStyle: 'label',
    },
    itemControl: {
      alignItems: 'center',
      borderRadius: 'full',
      display: 'inline-flex',
      flexShrink: '0',
      justifyContent: 'center',
      verticalAlign: 'top',
      _after: {
        content: '""',
        display: 'block',
        borderRadius: 'full',
      },
      _focusVisible: {
        focusVisibleRing: 'outside',
      },
    },
    itemText: {
      textStyle: 'label',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
  variants: {
    variant: {
      subtle: {
        item: {
          background: 'gray.subtle.bg',
          color: 'gray.subtle.fg',
          _checked: {
            background: 'colorPalette.subtle.bg',
            color: 'colorPalette.subtle.fg',
          },
        },
        itemControl: {
          borderWidth: '1px',
          borderColor: 'gray.subtle.border',
          _checked: {
            borderColor: 'colorPalette.solid.bg',
            _after: {
              bg: 'colorPalette.solid.bg',
            },
          },
        },
      },
      outline: {
        item: {
          borderWidth: '1px',
          borderColor: 'gray.outline.border',
          _checked: {
            boxShadow: '0 0 0 1px var(--shadow-color)',
            boxShadowColor: 'colorPalette.solid.bg',
            borderColor: 'colorPalette.solid.bg',
          },
        },
        itemControl: {
          borderWidth: '1px',
          borderColor: 'gray.outline.border',
          _checked: {
            bg: 'colorPalette.solid.bg',
            borderColor: 'colorPalette.solid.bg',
            _after: {
              background: 'colorPalette.solid.fg',
            },
          },
        },
      },
      surface: {
        item: {
          borderWidth: '1px',
          background: 'gray.surface.bg',
          borderColor: 'gray.surface.border',
          color: 'gray.surface.fg',
          _checked: {
            boxShadow: '0 0 0 1px var(--shadow-color)',
            boxShadowColor: 'colorPalette.solid.bg',
            borderColor: 'colorPalette.solid.bg',
          },
        },
        itemControl: {
          borderWidth: '1px',
          borderColor: 'gray.outline.border',
          _checked: {
            background: 'colorPalette.solid.bg',
            borderColor: 'colorPalette.solid.bg',
            _after: {
              background: 'colorPalette.solid.fg',
            },
          },
        },
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
        itemControl: {
          borderWidth: '1px',
          borderColor: 'gray.outline.border',
          _checked: {
            background: 'colorPalette.solid.fg',
            borderColor: 'colorPalette.solid.fg',
            _after: {
              bg: 'colorPalette.solid.bg',
            },
          },
        },
      },
    },
    size: {
      md: {
        item: { gap: '2', p: '4' },
        itemControl: { boxSize: '5', _after: { boxSize: '2' } },
        itemText: { textStyle: 'sm' },
      },
    },
  },
})
