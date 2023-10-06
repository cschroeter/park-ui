import { defineRecipe } from '@pandacss/dev'

export const badge = defineRecipe({
  className: 'badge',
  base: {
    borderRadius: 'full',
    fontWeight: 'medium',
    display: 'inline-flex',
    alignItems: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        background: 'accent.default',
        color: 'accent.fg',
      },
      subtle: {
        background: 'bg.subtle',
        borderColor: 'border.default',
        borderWidth: '1px',
        color: 'fg.emphasized',
        '& svg': {
          color: 'fg.muted',
        },
      },
      outline: {
        borderWidth: '2px',
        borderColor: 'border.emphasized',
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        px: '2',
        h: '5',
        gap: '1',
        '& svg': {
          width: '3',
          height: '3',
        },
      },
      md: {
        textStyle: 'sm',
        px: '2.5',
        h: '6',
        gap: '1.5',
        '& svg': {
          width: '4',
          height: '4',
        },
      },
      lg: {
        textStyle: 'sm',
        px: '3',
        h: '7',
        gap: '1.5',
        '& svg': {
          width: '4',
          height: '4',
        },
      },
    },
  },
})
