import { defineRecipe } from '@pandacss/dev'

export const link = defineRecipe({
  className: 'link',
  base: {
    alignItems: 'center',
    borderRadius: 'l1',
    cursor: 'pointer',
    display: 'inline-flex',
    focusVisibleRing: 'outside',
    fontWeight: 'medium',
    gap: '1.5',
    outline: 'none',
    textDecorationLine: 'underline',
    textDecorationThickness: '0.1em',
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
        textDecorationColor: 'colorPalette.surface.fg/60',
        _hover: {
          textDecorationColor: 'colorPalette.surface.fg',
        },
      },
      plain: {
        textDecorationColor: 'transparent',
        _hover: {
          textDecorationColor: 'colorPalette.surface.fg',
        },
      },
    },
  },
})
