import { defineRecipe } from '@pandacss/dev'

export const link = defineRecipe({
  className: 'link',
  base: {
    alignItems: 'center',
    borderRadius: 'l1',
    cursor: 'pointer',
    display: 'inline-flex',
    focusRingColor: 'colorPalette.surface.fg',
    focusVisibleRing: 'outside',
    fontWeight: 'medium',
    gap: '1.5',
    outline: 'none',
    textDecorationThickness: 'from-font',
    textUnderlineOffset: '0.125em',
    transitionDuration: 'normal',
    transitionProperty: 'text-decoration-color',
    _icon: {
      boxSize: '1em',
    },
  },
  defaultVariants: {
    variant: 'underline',
  },
  variants: {
    variant: {
      underline: {
        textDecoration: 'underline',
        textDecorationColor: 'colorPalette.surface.fg/60',
        _hover: {
          textDecorationColor: 'colorPalette.surface.fg',
        },
      },
      plain: {
        textDecoration: 'underline',
        textDecorationColor: 'transparent',
        _hover: {
          textDecorationColor: 'colorPalette.surface.fg',
        },
      },
    },
  },
})
