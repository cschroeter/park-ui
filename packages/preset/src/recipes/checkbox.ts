import { checkboxAnatomy } from '@ark-ui/react/checkbox'
import { defineSlotRecipe } from '@pandacss/dev'

export const checkbox = defineSlotRecipe({
  slots: checkboxAnatomy.keys(),
  className: 'checkbox',
  base: {
    root: {
      display: 'inline-flex',
      gap: '2',
      alignItems: 'center',
      verticalAlign: 'top',
      position: 'relative',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      borderWidth: '1px',
      borderColor: 'transparent',
      borderRadius: 'l1',
      cursor: 'checkbox',
      focusVisibleRing: 'outside',
      _icon: {
        boxSize: 'full',
      },
      _invalid: {
        colorPalette: 'red',
      },
      _disabled: {
        cursor: 'disabled',
      },
    },
    label: {
      fontWeight: 'medium',
      userSelect: 'none',
      _disabled: {
        color: 'fg.disabled',
      },
    },
  },

  variants: {
    size: {
      sm: {
        root: { gap: '2' },
        label: { textStyle: 'sm' },
        control: { boxSize: '4.5', p: '0.5' },
      },
      md: {
        root: { gap: '3' },
        label: { textStyle: 'md' },
        control: { boxSize: '5', p: '0.5' },
      },
      lg: {
        root: { gap: '3' },
        label: { textStyle: 'lg' },
        control: { boxSize: '5.5', p: '0.5' },
      },
    },

    variant: {
      outline: {
        control: {
          borderColor: 'gray.a7',
          color: 'colorPalette.fg',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            borderColor: 'colorPalette.solid',
          },
          _disabled: {
            layerStyle: 'disabled',
          },
        },
      },
      solid: {
        control: {
          borderColor: 'border.default',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            bg: 'colorPalette.solid',
            color: 'colorPalette.contrast',
            borderColor: 'colorPalette.solid',
          },
          _disabled: {
            layerStyle: 'disabled',
          },
          _invalid: {
            borderColor: 'border.error',
          },
        },
      },
      surface: {
        control: {
          bg: 'colorPalette.a2',
          color: 'colorPalette.a11',
          borderColor: 'colorPalette.a7',
          _disabled: {
            layerStyle: 'disabled',
          },
        },
      },
      subtle: {
        control: {
          bg: 'colorPalette.a3',
          color: 'colorPalette.a11',
          _disabled: {
            layerStyle: 'disabled',
          },
        },
      },
      plain: {
        control: {
          color: 'colorPalette.fg',
          _disabled: {
            layerStyle: 'disabled',
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
