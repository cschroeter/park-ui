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
    whiteSpace: 'pre-wrap',
  },
  defaultVariants: {
    size: 'md',
    variant: 'subtle',
  },
  variants: {
    variant: {
      solid: {
        layerStyle: 'solid',
      },
      surface: {
        layerStyle: 'surface',
      },
      subtle: {
        layerStyle: 'subtle',
      },
      outline: {
        layerStyle: 'outline',
      },
      plain: {
        layerStyle: 'plain',
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
