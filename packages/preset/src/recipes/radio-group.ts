import { radioGroupAnatomy } from '@ark-ui/react/radio-group'
import { defineSlotRecipe } from '@pandacss/dev'

export const radioGroup = defineSlotRecipe({
  className: 'radio-group',
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
    },
    itemControl: {
      alignItems: 'center',
      borderRadius: 'full',
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'center',
      outlineColor: 'bg.default',
      outlineStyle: 'solid',
      verticalAlign: 'top',
      _after: {
        content: '""',
        display: 'block',
        borderRadius: 'full',
        boxSize: '40%',
      },
      _focusVisible: {
        focusVisibleRing: 'outside',
        focusRingColor: 'colorPalette.solid.bg',
      },
    },
    item: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    itemText: {
      fontWeight: 'medium',
      userSelect: 'none',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        itemControl: {
          borderWidth: '1px',
          _checked: {
            bg: 'colorPalette.solid.bg',
            color: 'colorPalette.solid.fg',
            boxShadow: 'none',
            _after: {
              background: 'colorPalette.solid.fg',
            },
          },
        },
      },
    },
    size: {
      sm: {
        item: { gap: '2' },
        itemControl: { boxSize: '4.5' },
        itemText: { textStyle: 'sm' },
      },
      md: {
        item: { gap: '3' },
        itemControl: { boxSize: '5' },
        itemText: { textStyle: 'md' },
      },
      lg: {
        item: { gap: '3' },
        itemControl: { boxSize: '5.5' },
        itemText: { textStyle: 'lg' },
      },
    },
  },
})
