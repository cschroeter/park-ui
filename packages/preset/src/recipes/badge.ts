import { defineRecipe } from '@pandacss/dev'

export const badge = defineRecipe({
  className: 'badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'l2',
    gap: '1',
    fontWeight: 'medium',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  },
  defaultVariants: {
    variant: 'subtle',
    size: 'md',
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
    },
    size: {
      sm: {
        fontSize: '11px',
        px: '1.5',
        h: '4',
        gap: '0.5',
        _icon: {
          width: '2',
          height: '2',
        },
      },
      md: {
        textStyle: 'xs',
        px: '2',
        h: '5',
        gap: '1',
        _icon: {
          width: '3',
          height: '3',
        },
      },
      lg: {
        textStyle: 'xs',
        px: '2.5',
        h: '6',
        gap: '1.5',
        _icon: {
          width: '4',
          height: '4',
        },
      },
      xl: {
        textStyle: 'sm',
        px: '3',
        h: '7',
        gap: '1.5',
        _icon: {
          width: '4',
          height: '4',
        },
      },
    },
  },
})
