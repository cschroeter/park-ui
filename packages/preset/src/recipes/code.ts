import { defineRecipe } from '@pandacss/dev'

export const code = defineRecipe({
  className: 'code',
  base: {
    alignItems: 'center',
    borderRadius: 'l2',
    display: 'inline-flex',
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 'medium',
    fontFamily: 'code',
    gap: '1',
    lineHeight: '1',
  },
  defaultVariants: {
    size: 'md',
    variant: 'subtle',
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
      subtle: {
        bg: 'colorPalette.subtle.bg',
        color: 'colorPalette.subtle.fg',
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'colorPalette.outline.border',
        color: 'colorPalette.outline.fg',
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
})
