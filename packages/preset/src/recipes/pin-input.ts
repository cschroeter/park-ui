import { pinInputAnatomy } from '@ark-ui/react/pin-input'
import { defineSlotRecipe } from '@pandacss/dev'
import { input } from './input'

export const pinInput = defineSlotRecipe({
  className: 'pin-input',
  slots: pinInputAnatomy.keys(),
  base: {
    input: {
      ...input.base,
      textAlign: 'center',
      width: 'var(--input-height)',
      px: '1!',
    },
    control: {
      display: 'inline-flex',
      gap: '2',
      isolation: 'isolate',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },

  variants: {
    size: {
      xs: {
        input: input.variants?.size?.xs,
      },
      sm: {
        input: input.variants?.size?.sm,
      },
      md: {
        input: input.variants?.size?.md,
      },
      lg: {
        input: input.variants?.size?.lg,
      },
      xl: {
        input: input.variants?.size?.xl,
      },
      '2xl': {
        input: input.variants?.size?.['2xl'],
      },
    },
    variant: {
      outline: { input: input.variants?.variant?.outline },
      subtle: { input: input.variants?.variant?.subtle },
      flushed: { input: input.variants?.variant?.flushed },
    },
  },
})
