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
    whiteSpace: 'pre',
  },
  defaultVariants: {
    size: 'md',
    variant: 'subtle',
  },
  variants: {
    variant: {
      solid: {
        background: 'colorPalette.solid.bg',
        color: 'colorPalette.solid.fg',
      },
      surface: {
        background: 'colorPalette.surface.bg',
        color: 'colorPalette.surface.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.surface.border',
      },
      subtle: {
        background: 'colorPalette.subtle.bg',
        color: 'colorPalette.subtle.fg',
      },
      outline: {
        background: 'colorPalette.outline.bg',
        color: 'colorPalette.outline.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.outline.border',
      },
      plain: {
        color: 'colorPalette.a11',
      },
    },
    size: {
      xs: {
        textStyle: '2xs',
        px: '1',
        minH: '4',
      },
      sm: {
        textStyle: 'xs',
        px: '1.5',
        minH: '5',
      },
      md: {
        textStyle: 'sm',
        px: '2',
        minH: '6',
      },
      lg: {
        textStyle: 'sm',
        px: '2.5',
        minH: '7',
      },
    },
  },
})
