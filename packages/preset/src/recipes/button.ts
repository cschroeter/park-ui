import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  jsx: ['Button', 'IconButton', 'CloseButton'],
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'l2',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'semibold',
    flexShrink: '0',
    isolation: 'isolate',
    justifyContent: 'center',
    outline: '0',
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'background, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    _icon: {
      flexShrink: '0',
      fontSize: '1.1em',
      width: '1.1em',
      height: '1.1em',
    },
    _disabled: {
      cursor: 'not-allowed',
    },
    focusVisibleRing: 'outside',
    focusRingColor: 'colorPalette.solid',
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        background: 'colorPalette.solid',
        color: 'colorPalette.contrast',
        _hover: {
          background: 'colorPalette.emphasiszed',
        },
        _disabled: {
          layerStyle: 'disabled',
        },
      },
      surface: {
        background: 'colorPalette.a2',
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.a7',
        _hover: {
          background: 'colorPalette.a3',
          shadowColor: 'colorPalette.a8',
        },
        _active: {
          shadowColor: 'colorPalette.a8',
        },
      },
      subtle: {
        background: 'colorPalette.a3',
        color: 'colorPalette.fg',
        _hover: {
          background: 'colorPalette.a4',
        },
        _disabled: {
          layerStyle: 'disabled',
        },
      },
      outline: {
        color: 'colorPalette.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.a7',
        _hover: {
          background: 'colorPalette.a2',
        },
        _disabled: {
          layerStyle: 'disabled',
        },
      },
      ghost: {
        color: 'colorPalette.fg',
        _hover: {
          background: 'colorPalette.a3',
        },
        _selected: {
          background: 'colorPalette.a3',
        },
        _disabled: {
          layerStyle: 'disabled',
        },
      },
      plain: {
        color: 'colorPalette.fg',
      },
    },
    size: {
      xs: {
        h: '8',
        minW: '8',
        textStyle: 'xs',
        px: '3',
        gap: '2',
      },
      sm: {
        h: '9',
        minW: '9',
        textStyle: 'sm',
        px: '3.5',
        gap: '2',
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
        px: '4',
        gap: '2',
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'md',
        px: '4.5',
        gap: '2',
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '5',
        gap: '2.5',
      },
      '2xl': {
        h: '16',
        minW: '16',
        textStyle: 'lg',
        px: '7',
        gap: '3',
      },
    },
  },
})
