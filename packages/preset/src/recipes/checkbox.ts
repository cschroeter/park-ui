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
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      borderWidth: '1px',
      borderColor: 'transparent',
      borderRadius: 'l1',
      cursor: 'pointer',
      focusVisibleRing: 'outside',
      focusRingColor: 'colorPalette.solid.bg',
      _icon: {
        boxSize: 'full',
      },
    },
    label: {
      fontWeight: 'medium',
      userSelect: 'none',
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
      solid: {
        control: {
          control: {
            borderColor: 'border.default',
            '&:is([data-state=checked], [data-state=indeterminate])': {
              background: 'colorPalette.solid.bg',
              color: 'colorPalette.solid.fg',
              borderColor: 'transparent',
            },
            _invalid: {
              background: 'bg.error',
            },
          },
        },
      },
      surface: {
        control: {
          background: 'colorPalette.surface.bg',
          color: 'colorPalette.surface.fg',
          borderColor: 'colorPalette.surface.border',
        },
      },
      subtle: {
        control: {
          background: 'colorPalette.subtle.bg',
          color: 'colorPalette.subtle.fg',
        },
      },
      outline: {
        control: {
          background: 'colorPalette.outline.bg',
          borderColor: 'gray.a7',
          color: 'colorPalette.outline.fg',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            borderColor: 'colorPalette.solid',
          },
        },
      },
      plain: {
        control: {
          color: 'colorPalette.plain.fg',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
