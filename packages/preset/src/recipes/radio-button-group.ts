import { radioGroupAnatomy } from '@ark-ui/react/radio-group'
import { defineSlotRecipe } from '@pandacss/dev'

export const radioButtonGroup = defineSlotRecipe({
  className: 'radio-button-group',
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    item: {
      alignItems: 'center',
      appearance: 'none',
      borderColor: 'border.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      cursor: 'pointer',
      display: 'inline-flex',
      fontWeight: 'semibold',
      justifyContent: 'center',
      outline: 'none',
      position: 'relative',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      _hover: {
        background: 'gray.a2',
      },
      _checked: {
        cursor: 'default',
      },
      _disabled: {
        borderColor: 'gray.6',
        color: 'gray.6',
        cursor: 'not-allowed',
      },
    },
    itemText: {
      display: 'inline-flex',
      alignItems: 'center',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
  variants: {
    variant: {
      solid: {
        item: {
          _checked: {
            background: 'colorPalette.solid.bg',
            borderColor: 'colorPalette.solid.bg',
            color: 'colorPalette.solid.fg',
            _hover: {
              color: 'colorPalette.solid.fg',
              background: 'colorPalette.solid.bg',
            },
          },
        },
      },
      outline: {
        item: {
          _checked: {
            borderColor: 'colorPalette.solid.bg',
            boxShadow: '0 0 0 1px var(--colors-color-palette-solid-bg)',
            _hover: {
              background: 'initial',
            },
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          gap: '2',
        },
        item: {
          h: '9',
          minW: '9',
          textStyle: 'sm',
          px: '3.5',
          '& svg': {
            width: '4.5',
            height: '4.5',
          },
        },
        itemText: {
          gap: '2',
        },
      },
      md: {
        root: {
          gap: '3',
        },
        item: {
          h: '10',
          minW: '10',
          textStyle: 'sm',
          px: '4',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
        itemText: {
          gap: '2',
        },
      },
      lg: {
        root: {
          gap: '3',
        },
        item: {
          h: '11',
          minW: '11',
          textStyle: 'md',
          px: '4.5',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
        itemText: {
          gap: '2',
        },
      },
      xl: {
        root: {
          gap: '3',
        },
        item: {
          h: '12',
          minW: '12',
          textStyle: 'md',
          px: '5',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
        itemText: {
          gap: '2.5',
        },
      },
    },
  },
})
