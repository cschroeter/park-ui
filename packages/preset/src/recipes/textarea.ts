import { defineRecipe } from '@pandacss/dev'

export const textarea = defineRecipe({
  className: 'textarea',
  jsx: ['Textarea', 'Field.Textarea'],
  base: {
    '--error-color': 'colors.fg.error',
    '--focus-color': 'colors.colorPalette.solid',
    appearance: 'none',
    borderRadius: 'l2',
    minWidth: '0',
    outline: '0',
    position: 'relative',
    textAlign: 'start',
    transitionDuration: 'normal',
    transitionProperty: 'box-shadow, border-color',
    transitionTimingFunction: 'default',
    width: '100%',
    _disabled: {
      layerStyle: 'disabled',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        bg: 'transparent',
        borderWidth: '1px',
        borderColor: 'gray.a7',
        color: 'gray.12',
        focusVisibleRing: 'inside',
        focusRingColor: 'var(--focus-color)',
        _invalid: {
          focusRingColor: 'var(--error-color)',
          borderColor: 'var(--error-color)',
        },
      },
      subtle: {
        borderWidth: '1px',
        borderColor: 'transparent',
        background: 'gray.a3',
        color: 'gray.fg',
        focusVisibleRing: 'inside',
        focusRingColor: 'var(--focus-color)',
        _invalid: {
          focusRingColor: 'var(--error-color)',
        },
      },
      flushed: {
        bg: 'transparent',
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.a7',
        borderRadius: '0',
        color: 'gray.12',
        px: '0',
        _invalid: {
          borderColor: 'var(--error-color)',
          boxShadow: '0px 1px 0px 0px var(--error-color)',
        },
        _focusVisible: {
          borderColor: 'var(--focus-color)',
          boxShadow: '0px 1px 0px 0px var(--focus-color)',
          _invalid: {
            borderColor: 'var(--error-color)',
            boxShadow: '0px 1px 0px 0px var(--error-color)',
          },
        },
      },
    },
    size: {
      sm: { p: '2.5', fontSize: 'sm', scrollPaddingBottom: '2.5' },
      md: { p: '3', fontSize: 'md', scrollPaddingBottom: '3' },
      lg: { p: '3.5', fontSize: 'md', scrollPaddingBottom: '3.5' },
      xl: { p: '4', fontSize: 'md', scrollPaddingBottom: '4' },
    },
  },
})
