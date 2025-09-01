import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
  className: 'input',
  jsx: ['Input', 'Field.Input'],
  base: {
    '--error-color': 'colors.red.9',
    '--focus-color': 'colors.colorPalette.solid',
    appearance: 'none',
    borderRadius: 'l2',
    height: 'var(--input-height)',
    minW: 'var(--input-height)',
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
    _invalid: {
      focusRingColor: 'var(--error-color)',
      borderColor: 'var(--error-color)',
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
      },
      subtle: {
        borderWidth: '1px',
        borderColor: 'transparent',
        background: 'colorPalette.a3',
        color: 'colorPalette.fg',
        focusVisibleRing: 'inside',
        focusRingColor: 'var(--focus-color)',
        _placeholder: {
          color: 'colorPalette.fg/60',
        },
      },
      flushed: {
        bg: 'transparent',
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.a7',
        borderRadius: '0',
        color: 'gray.12',
        px: '0',
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
      '2xs': {
        textStyle: 'xs',
        px: '1.5',
        '--input-height': 'sizes.7',
      },
      xs: {
        textStyle: 'xs',
        px: '2',
        '--input-height': 'sizes.8',
      },
      sm: {
        textStyle: 'sm',
        px: '2.5',
        '--input-height': 'sizes.9',
      },
      md: {
        textStyle: 'md',
        px: '3',
        '--input-height': 'sizes.10',
      },
      lg: {
        textStyle: 'md',
        px: '3.5',
        '--input-height': 'sizes.11',
      },
      xl: {
        textStyle: 'lg',
        px: '4',
        '--input-height': 'sizes.12',
      },
      '2xl': {
        textStyle: '3xl',
        px: '4.5',
        '--input-height': 'sizes.16',
      },
    },
  },
})
