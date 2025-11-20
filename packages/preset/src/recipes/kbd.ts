import { defineRecipe } from '@pandacss/dev'

export const kbd = defineRecipe({
  className: 'kbd',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'medium',
    fontFamily: 'code',
    flexShrink: '0',
    whiteSpace: 'nowrap',
    wordSpacing: '-0.5em',
    userSelect: 'none',
    borderRadius: 'l2',
    justifyContent: 'center',
  },

  variants: {
    variant: {
      solid: {
        bg: 'colorPalette.solid.bg',
        color: 'colorPalette.solid.fg',
      },
      surface: {
        bg: 'colorPalette.surface.bg',
        borderWidth: '1px',
        borderColor: 'colorPalette.surface.border',
        color: 'colorPalette.surface.fg',
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'colorPalette.outline.border',
        color: 'colorPalette.outline.fg',
      },
      subtle: {
        bg: 'colorPalette.subtle.bg',
        color: 'colorPalette.subtle.fg',
      },
      plain: {
        color: 'colorPalette.plain.fg',
      },
    },
    size: {
      sm: { textStyle: 'xs', height: '4.5', minWidth: '4.5', px: '1' },
      md: { textStyle: 'sm', height: '5', minWidth: '5', px: '1' },
      lg: { textStyle: 'sm', height: '5.5', minWidth: '5.5', px: '1' },
      xl: { textStyle: 'md', height: '6', minWidth: '6', px: '1' },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'subtle',
  },
})
