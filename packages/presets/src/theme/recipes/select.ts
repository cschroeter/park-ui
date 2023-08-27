import { selectAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
  className: 'select',
  description: 'A select style',
  slots: selectAnatomy.keys(),
  base: {
    content: {
      background: 'bg.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      boxShadow: 'sm',
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
      borderRadius: 'l1',
      cursor: 'pointer',
      display: 'flex',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _hover: {
        background: 'bg.subtle',
      },
      _highlighted: {
        background: 'bg.subtle',
      },
    },
    label: {
      color: 'fg.emphasized',
      fontWeight: 'medium',
    },
    trigger: {
      appearance: 'none',
      alignItems: 'center',
      backgroundColor: 'bg.default',
      borderColor: 'border.emphasized',
      borderRadius: 'l2',
      borderWidth: '1px',
      display: 'inline-flex',
      justifyContent: 'space-between',
      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'box-shadow, border-color',
      transitionTimingFunction: 'default',
      width: 'full',
      _focus: {
        borderColor: 'border.accent',
        boxShadow: 'accent',
      },
      _placeholderShown: {
        color: 'fg.subtle',
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
        trigger: { px: '2.5', h: '9', minW: '9', fontSize: 'sm' },
      },
      md: {
        content: { p: '1', gap: '1' },
        option: { textStyle: 'md', px: '2', height: '10' },
        label: { textStyle: 'sm' },
        trigger: { px: '3', h: '10', minW: '10', fontSize: 'md' },
      },
      lg: {
        content: { p: '1.5', gap: '1' },
        option: { textStyle: 'md', px: '2', height: '11' },
        label: { textStyle: 'md' },
        trigger: { px: '3.5', h: '11', minW: '11', fontSize: 'md' },
      },
    },
  },
})
