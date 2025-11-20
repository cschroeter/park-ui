import type { RecipeConfig } from '@pandacss/dev'

export const input = {
  className: 'input',
  jsx: ['Input', 'Field.Input'],
  base: {
    appearance: 'none',
    borderRadius: 'l2',
    height: 'var(--input-height)',
    minHeight: 'var(--input-height)',
    minW: 'var(--input-height)',
    outline: '0',
    position: 'relative',
    textAlign: 'start',
    transition: 'colors',
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
        borderWidth: '1px',
        borderColor: 'gray.outline.border',
        focusVisibleRing: 'inside',
        _invalid: {
          focusRingColor: 'error',
          borderColor: 'error',
        },
      },
      surface: {
        bg: 'gray.surface.bg',
        borderWidth: '1px',
        borderColor: 'gray.surface.border',
        focusVisibleRing: 'inside',

        _invalid: {
          focusRingColor: 'error',
          borderColor: 'error',
        },
      },
      subtle: {
        borderWidth: '1px',
        borderColor: 'transparent',
        bg: 'gray.subtle.bg',
        color: 'gray.subtle.fg',
        focusVisibleRing: 'inside',

        _invalid: {
          focusRingColor: 'error',
          borderColor: 'error',
        },
      },
      flushed: {
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.outline.border',
        borderRadius: '0',
        color: 'fg.default',
        px: '0',
        _invalid: {
          borderColor: 'error',
        },
        _focus: {
          borderColor: 'colorPalette.solid.bg',
          boxShadowColor: 'colorPalette.solid.bg',
          boxShadow: '0 1px 0 0 var(--shadow-color)',
          _invalid: {
            borderColor: 'error',
            boxShadowColor: 'error',
          },
        },
      },
    },
    size: {
      '2xs': { textStyle: 'xs', px: '1.5', '--input-height': 'sizes.7' },
      xs: { textStyle: 'sm', px: '2', '--input-height': 'sizes.8' },
      sm: { textStyle: 'sm', px: '2.5', '--input-height': 'sizes.9' },
      md: { textStyle: 'md', px: '3', '--input-height': 'sizes.10' },
      lg: { textStyle: 'md', px: '3.5', '--input-height': 'sizes.11' },
      xl: { textStyle: 'lg', px: '4', '--input-height': 'sizes.12' },
      '2xl': { textStyle: '3xl', px: '4.5', '--input-height': 'sizes.16' },
    },
  },
} satisfies RecipeConfig
