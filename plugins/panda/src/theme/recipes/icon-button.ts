import { defineRecipe } from '@pandacss/dev'
import deepmerge from 'deepmerge'
import { button } from './button'

export const iconButton = deepmerge(
  button,
  defineRecipe({
    className: 'iconButton',
    variants: {
      size: {
        xs: {
          px: '0',
        },
        sm: {
          px: '0',
        },
        md: {
          px: '0',
        },
        lg: {
          px: '0',
        },
        xl: {
          px: '0',
        },
        '2xl': {
          px: '0',
        },
      },
    },
  }),
)
