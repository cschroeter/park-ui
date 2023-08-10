import { selectAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
  className: 'select',
  description: 'A select style',
  slots: selectAnatomy.keys(),
  base: {
    content: {
      background: 'bg.default',
      borderRadius: 'sm',
      borderWidth: '1px',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      _hidden: {
        display: 'none',
      },
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
      _focusVisible: {
        outlineOffset: '2px',
        outline: '2px solid',
        outlineColor: 'border.outline',
      },
    },
    option: {
      alignItems: 'center',
      borderRadius: 'xs',
      cursor: 'pointer',
      display: 'flex',
      fontWeight: 'medium',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _hover: {
        background: 'bg.subtle',
      },
      _highlighted: {
        background: 'bg.subtle',
      },
      label: {
        color: 'fg.emphasized',
        fontWeight: 'medium',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        content: { p: '0.5', gap: '1' },
        option: { textStyle: 'sm', px: '2', height: '9' },
        label: { textStyle: 'sm' },
      },
      md: {
        content: { p: '1', gap: '1' },
        option: { textStyle: 'sm', px: '2', height: '10' },
        label: { textStyle: 'sm' },
      },
      lg: {
        content: { p: '1.5', gap: '1' },
        option: { textStyle: 'md', px: '2', height: '11' },
        label: { textStyle: 'md' },
      },
    },
  },
})
