import { defineSlotRecipe } from '@pandacss/dev'

export const alert = defineSlotRecipe({
  className: 'alert',
  slots: ['root', 'content', 'description', 'indicator', 'title'],
  base: {
    root: {
      alignItems: 'flex-start',
      borderRadius: 'l3',
      display: 'flex',
      position: 'relative',
      width: 'full',
    },
    content: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      gap: '1',
    },
    description: {
      display: 'inline',
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
    },
    title: {
      fontWeight: 'semibold',
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'info',
    variant: 'subtle',
  },
  variants: {
    size: {
      md: {
        root: {
          gap: '3',
          p: '4',
          textStyle: 'sm',
        },
        indicator: {
          _icon: {
            width: '5',
            height: '5',
          },
        },
      },
      lg: {
        root: {
          gap: '4',
          p: '4',
          textStyle: 'md',
        },
        indicator: {
          _icon: {
            width: '6',
            height: '6',
          },
        },
      },
    },
    variant: {
      solid: {
        root: {
          bg: 'colorPalette.solid.bg',
          color: 'colorPalette.solid.fg',
        },
      },
      surface: {
        root: {
          bg: 'colorPalette.surface.bg',
          borderWidth: '1px',
          borderColor: 'colorPalette.surface.border',
          color: 'colorPalette.surface.fg',
        },
      },
      subtle: {
        root: {
          bg: 'colorPalette.subtle.bg',
          color: 'colorPalette.subtle.fg',
        },
      },
      outline: {
        root: {
          borderWidth: '1px',
          borderColor: 'colorPalette.outline.border',
          color: 'colorPalette.outline.fg',
        },
      },
    },
    status: {
      info: {
        root: { colorPalette: 'blue' },
      },
      warning: {
        root: { colorPalette: 'orange' },
      },
      success: {
        root: { colorPalette: 'green' },
      },
      error: {
        root: { colorPalette: 'red' },
      },
      neutral: {},
    },
  },
})
