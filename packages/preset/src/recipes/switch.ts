import { switchAnatomy } from '@ark-ui/react/switch'
import { defineSlotRecipe } from '@pandacss/dev'

export const switchRecipe = defineSlotRecipe({
  className: 'switch',
  jsx: ['Switch', /Switch\.+/],
  slots: switchAnatomy.extendWith('indicator').keys(),
  base: {
    root: {
      display: 'inline-flex',
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
      fontWeight: 'medium',
      userSelect: 'none',
      lineHeight: '1',
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
      cursor: 'pointer',
      borderRadius: 'full',
      position: 'relative',
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      transition: 'backgrounds',
      focusVisibleRing: 'outside',
      _disabled: {
        layerStyle: 'disabled',
      },
      _invalid: {
        outline: '2px solid',
        outlineColor: 'error',
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
          bg: 'gray.subtle.bg',
          focusVisibleRing: 'outside',
          _checked: {
            bg: 'colorPalette.solid.bg',
          },
        },
        thumb: {
          bg: 'white',
          _checked: {
            bg: 'colorPalette.solid.fg',
          },
          width: 'var(--switch-height)',
          height: 'var(--switch-height)',
          scale: '0.8',
          boxShadow: 'xs',
        },
      },
    },
    size: {
      xs: {
        root: {
          gap: '2',
          '--switch-width': 'sizes.8',
          '--switch-height': 'sizes.4',
          '--switch-indicator-font-size': 'fontSizes.xs',
        },
        label: { fontSize: 'sm' },
      },
      sm: {
        root: {
          gap: '2',
          '--switch-width': 'sizes.9',
          '--switch-height': 'sizes.4.5',
          '--switch-indicator-font-size': 'fontSizes.xs',
        },
        label: { fontSize: 'sm' },
      },
      md: {
        root: {
          gap: '3',
          '--switch-width': 'sizes.10',
          '--switch-height': 'sizes.5',
          '--switch-indicator-font-size': 'fontSizes.sm',
        },
        label: { fontSize: 'md' },
      },
      lg: {
        root: {
          gap: '3',
          '--switch-width': 'sizes.11',
          '--switch-height': 'sizes.5.5',
          '--switch-indicator-font-size': 'fontSizes.md',
        },
        label: { fontSize: 'lg' },
      },
    },
  },
})
