import { selectAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(selectAnatomy.build())

export const select = defineRecipe({
  className: 'select',
  description: 'A select style',
  base: parts({
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
        outlineColor: 'neutral.500',
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
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: parts({
        content: { p: '0.5', gap: '1' },
        option: { textStyle: 'sm', px: '2', height: '9' },
      }),
      md: parts({
        content: { p: '1', gap: '1' },
        option: { textStyle: 'sm', px: '2', height: '10' },
      }),
      lg: parts({
        content: { p: '1.5', gap: '1' },
        option: { textStyle: 'md', px: '2', height: '11' },
      }),
    },
  },
})
