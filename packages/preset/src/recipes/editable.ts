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
      cursor: 'default',
      display: 'inline-flex',
      transitionDuration: 'normal',
      transitionProperty: 'common',
      _disabled: {
        userSelect: 'none',
      },
      _hover: {
        bg: 'gray.plain.bg.hover',
      },
    },
    input: {
      borderRadius: 'l2',

      focusRingWidth: '2px',
      focusRing: 'inside',
      transitionDuration: 'normal',
      transitionProperty: 'common',
      width: 'full',
      _focusVisible: {
        outlineOffset: '-1px',
      },
    },
    control: {
      alignItems: 'center',
      display: 'inline-flex',
      gap: '1.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      '2xs': {
        preview: { textStyle: 'xs', px: '2', py: '0.5' },
        input: { textStyle: 'xs', px: '2', py: '0.5' },
      },
      xs: {
        preview: { textStyle: 'sm', px: '2.5', py: '1.5' },
        input: { textStyle: 'sm', px: '2.5', py: '1.5' },
      },
      sm: {
        preview: { textStyle: 'sm', px: '3', py: '2' },
        input: { textStyle: 'sm', px: '3', py: '2' },
      },
      md: {
        preview: { textStyle: 'sm', px: '3.5', py: '2.5' },
        input: { textStyle: 'sm', px: '3.5', py: '2.5' },
      },
      lg: {
        preview: { textStyle: 'md', px: '4', py: '2.5' },
        input: { textStyle: 'md', px: '4', py: '2.5' },
      },
    },
  },
})
