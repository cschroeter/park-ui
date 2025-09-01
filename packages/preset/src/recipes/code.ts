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
        bg: 'colorPalette.solid',
        color: 'colorPalette.contrast',
      },
      surface: {
        background: 'colorPalette.a2',
        color: 'colorPalette.a11',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.a7',
      },
      subtle: {
        background: 'colorPalette.a3',
        color: 'colorPalette.a11',
      },
      outline: {
        color: 'colorPalette.a11',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.a7',
      },
      plain: {
        color: 'colorPalette.a11',
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
