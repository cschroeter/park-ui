import { defineRecipe } from '@pandacss/dev'
import { input } from './input'

export const inputAddon = defineRecipe({
  className: 'input-addon',
  base: {
    flex: '0 0 auto',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    alignSelf: 'stretch',
    borderRadius: 'l2',
  },
  variants: {
    size: input.variants?.size ?? {},
    variant: {
      outline: {
        borderWidth: '1px',
        borderColor: 'border',
        bg: 'bg.muted',
      },
      subtle: {
        borderWidth: '1px',
        borderColor: 'transparent',
        bg: 'bg.emphasized',
      },
      flushed: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: '0',
        px: '0',
        bg: 'transparent',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})
