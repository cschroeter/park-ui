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
        layerStyle: 'solid',
      },
      surface: {
        layerStyle: 'surface',
      },
      outline: {
        layerStyle: 'outline',
      },
      subtle: {
        layerStyle: 'subtle',
      },
      plain: {
        layerStyle: 'plain',
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
