import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  jsx: ['IconButton', 'CloseButton', 'ButtonGroup'],
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
        layerStyle: 'solid.interactive',
      },
      surface: {
        layerStyle: 'surface.interactive',
      },
      subtle: {
        layerStyle: 'subtle.interactive',
      },
      outline: {
        layerStyle: 'outline.interactive',
      },
      plain: {
        layerStyle: 'plain.interactive',
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
