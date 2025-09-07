import { switchAnatomy } from '@ark-ui/react/switch'
import { defineSlotRecipe } from '@pandacss/dev'

export const switchRecipe = defineSlotRecipe({
  className: 'switch',
  jsx: ['Switch', /Switch\.+/],
  slots: switchAnatomy.extendWith('indicator').keys(),
  base: {
    root: {
      display: 'inline-flex',
      gap: '2.5',
      alignItems: 'center',
      position: 'relative',
      verticalAlign: 'middle',
      '--switch-diff': 'calc(var(--switch-width) - var(--switch-height))',
      '--switch-x': {
        base: 'var(--switch-diff)',
        _rtl: 'calc(var(--switch-diff) * -1)',
      },
    },
    label: {
      lineHeight: '1',
      userSelect: 'none',
      fontSize: 'sm',
      fontWeight: 'medium',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    indicator: {
      position: 'absolute',
      height: 'var(--switch-height)',
      width: 'var(--switch-height)',
      fontSize: 'var(--switch-indicator-font-size)',
      fontWeight: 'medium',
      flexShrink: 0,
      userSelect: 'none',
      display: 'grid',
      placeContent: 'center',
      transition: 'inset-inline-start 0.12s ease',
      insetInlineStart: 'calc(var(--switch-x) - 2px)',
      _checked: {
        insetInlineStart: '2px',
      },
    },
    control: {
      display: 'inline-flex',
      gap: '0.5rem',
      flexShrink: 0,
      justifyContent: 'flex-start',
      cursor: 'switch',
      borderRadius: 'full',
      position: 'relative',
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      transition: 'backgrounds',
      _disabled: {
        layerStyle: 'disabled',
        cursor: 'not-allowed',
      },
      _invalid: {
        outline: '2px solid',
        outlineColor: 'border.error',
        outlineOffset: '2px',
      },
    },
    thumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transitionProperty: 'translate',
      transitionDuration: 'fast',
      borderRadius: 'inherit',
      _checked: {
        translate: 'var(--switch-x) 0',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        control: {
          borderRadius: 'full',
          bg: 'gray.4',
          focusVisibleRing: 'outside',
          _checked: {
            bg: 'colorPalette.solid',
          },
        },
        thumb: {
          bg: 'colorPalette.contrast',
          width: 'var(--switch-height)',
          height: 'var(--switch-height)',
          scale: '0.8',
          boxShadow: 'sm',
          _checked: {
            bg: 'colorPalette.contrast',
          },
        },
      },
    },
    size: {
      xs: {
        root: {
          '--switch-width': 'sizes.6',
          '--switch-height': 'sizes.3',
          '--switch-indicator-font-size': 'fontSizes.xs',
        },
      },
      sm: {
        root: {
          '--switch-width': 'sizes.8',
          '--switch-height': 'sizes.4',
          '--switch-indicator-font-size': 'fontSizes.xs',
        },
      },
      md: {
        root: {
          '--switch-width': 'sizes.10',
          '--switch-height': 'sizes.5',
          '--switch-indicator-font-size': 'fontSizes.sm',
        },
      },
      lg: {
        root: {
          '--switch-width': 'sizes.12',
          '--switch-height': 'sizes.6',
          '--switch-indicator-font-size': 'fontSizes.md',
        },
      },
    },
  },
})
