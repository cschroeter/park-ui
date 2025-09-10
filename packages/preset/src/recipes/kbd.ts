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
    px: '1',
    borderRadius: 'l2',
    justifyContent: 'center',
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
        borderWidth: '1px',
        borderBottomWidth: '2px',
        borderColor: 'colorPalette.surface.border',
      },
      outline: {
        background: 'colorPalette.outline.bg',
        color: 'colorPalette.outline.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.outline.border',
      },
      subtle: {
        background: 'colorPalette.subtle.bg',
        color: 'colorPalette.subtle.fg',
      },
      plain: {
        color: 'colorPalette.plain.fg',
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        height: '4.5',
        minWidth: '4.5',
      },
      md: {
        textStyle: 'sm',
        height: '5',
        minWidth: '5',
      },
      lg: {
        textStyle: 'sm',
        height: '5.5',
        minWidth: '5.5',
      },
      xl: {
        textStyle: 'md',
        height: '6',
        minWidth: '6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'surface',
  },
})
