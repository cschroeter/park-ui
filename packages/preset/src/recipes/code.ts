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
    whiteSpace: 'nowrap',
  },
  defaultVariants: {
    size: 'sm',
    variant: 'subtle',
  },
  variants: {
    variant: {
      solid: {
        bg: 'colorPalette.bg.solid',
        color: 'colorPalette.fg',
      },
      subtle: {
        bg: 'colorPalette.bg.subtle',
        color: 'fg.default',
      },
      outline: {
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.muted',
      },
      surface: {
        bg: 'colorPalette.subtle',
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.muted',
      },
      plain: {
        color: 'colorPalette.fg',
      },
    },
    size: {
      sm: {
        minHeight: '5',
        px: '0.5',
        textStyle: 'xs',
      },
      md: {
        minHeight: '6',
        textStyle: 'sm',
        px: '1',
        py: '1px',
      },
      lg: {
        minHeight: '7',
        px: '1.5',
        py: '1px',
        textStyle: 'md',
      },
    },
  },
})
