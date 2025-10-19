import { defineRecipe } from '@pandacss/dev'

export const absoluteCenter = defineRecipe({
  className: 'absolute-center',
  base: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultVariants: {
    axis: 'both',
  },
  variants: {
    axis: {
      horizontal: {
        insetStart: '50%',
        translate: '-50%',
        _rtl: {
          translate: '50%',
        },
      },
      vertical: {
        top: '50%',
        translate: '0 -50%',
      },
      both: {
        insetStart: '50%',
        top: '50%',
        translate: '-50% -50%',
        _rtl: {
          translate: '50% -50%',
        },
      },
    },
  },
})
