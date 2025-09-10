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
    flexShrink: '0',
    fontWeight: 'semibold',
    isolation: 'isolate',
    justifyContent: 'center',
    outline: '0',
    position: 'relative',
    transition: 'common',
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
      layerStyle: 'disabled',
    },
    focusVisibleRing: 'outside',
    focusRingColor: 'colorPalette.solid.bg',
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        background: 'colorPalette.solid.bg',
        color: 'colorPalette.solid.fg',
        _hover: {
          background: 'colorPalette.solid.bg.hover',
        },
        _active: {
          background: 'colorPalette.solid.bg.active',
        },
      },
      surface: {
        background: 'colorPalette.surface.bg',
        color: 'colorPalette.surface.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.surface.border',
        _hover: {
          background: 'colorPalette.surface.bg.hover',
          shadowColor: 'colorPalette.surface.border.hover',
        },
        _active: {
          background: 'colorPalette.surface.bg.active',
          shadowColor: 'colorPalette.surface.border.active',
        },
      },
      subtle: {
        background: 'colorPalette.subtle.bg',
        color: 'colorPalette.subtle.fg',
        _hover: {
          background: 'colorPalette.subtle.bg.hover',
        },
        _active: {
          background: 'colorPalette.subtle.bg.active',
        },
      },
      outline: {
        background: 'colorPalette.outline.bg',
        color: 'colorPalette.outline.fg',
        shadow: 'inset 0 0 0px 1px var(--shadow-color)',
        shadowColor: 'colorPalette.outline.border',
        _hover: {
          background: 'colorPalette.outline.bg.hover',
          shadowColor: 'colorPalette.outline.border.hover',
        },
        _active: {
          background: 'colorPalette.outline.bg.active',
          shadowColor: 'colorPalette.outline.border.active',
        },
      },
      plain: {
        background: 'colorPalette.plain.bg',
        color: 'colorPalette.plain.fg',
        _hover: {
          background: 'colorPalette.plain.bg.hover',
        },
        _active: {
          background: 'colorPalette.plain.bg.active',
        },
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
