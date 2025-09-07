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
  },

  variants: {
    variant: {
      raised: {
        background: 'colorPalette.a2',
        color: 'colorPalette.a11',
        borderWidth: '1px',
        borderBottomWidth: '2px',
        borderColor: 'colorPalette.a7',
      },
      outline: {
        color: 'colorPalette.a11',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.a7',
      },
      subtle: {
        background: 'colorPalette.a3',
        color: 'colorPalette.a11',
      },
      plain: {
        color: 'colorPalette.fg',
      },
    },

    size: {
      sm: {
        textStyle: 'xs',
        height: '4.5',
      },
      md: {
        textStyle: 'sm',
        height: '5',
      },
      lg: {
        textStyle: 'md',
        height: '6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'raised',
  },
})
