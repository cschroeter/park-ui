import { editableAnatomy } from '@ark-ui/react/editable'
import { defineSlotRecipe } from '@pandacss/dev'

export const editable = defineSlotRecipe({
  slots: editableAnatomy.keys(),
  className: 'editable',
  base: {
    root: {
      alignItems: 'center',
      display: 'inline-flex',
      gap: '1.5',
      position: 'relative',
      width: 'full',
    },
    preview: {
      alignItems: 'center',
      borderRadius: 'l2',
      cursor: 'text',
      display: 'inline-flex',
      p: '1',
      textAlign: 'inherit',
      transitionDuration: 'moderate',
      transitionProperty: 'common',
      _hover: {
        bg: 'gray.surface.bg.hover',
      },
      _disabled: {
        userSelect: 'none',
      },
    },
    input: {
      borderRadius: 'l2',
      focusRingColor: 'colorPalette.solid.bg',
      focusRingWidth: '2px',
      focusVisibleRing: 'inside',
      outline: '0',
      p: '1',
      textAlign: 'inherit',
      transitionDuration: 'normal',
      transitionProperty: 'common',
      width: 'full',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1.5',
    },
  },

  variants: {
    size: {
      sm: {
        root: { textStyle: 'sm' },
        preview: { minH: '9' },
        input: { minH: '9' },
      },
      md: {
        root: { textStyle: 'sm' },
        preview: { minH: '10' },
        input: { minH: '10', px: '3' },
      },
      lg: {
        root: { textStyle: 'md' },
        preview: { minH: '11' },
        input: { minH: '11' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
