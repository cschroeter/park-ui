import { avatarAnatomy } from '@ark-ui/react/avatar'
import { defineSlotRecipe } from '@pandacss/dev'

export const avatar = defineSlotRecipe({
  className: 'avatar',
  slots: avatarAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'medium',
      position: 'relative',
      verticalAlign: 'top',
      flexShrink: '0',
      userSelect: 'none',
      width: 'var(--avatar-size)',
      height: 'var(--avatar-size)',
      fontSize: 'var(--avatar-font-size)',
      borderRadius: 'var(--avatar-radius)',
      '&[data-group-item]': {
        borderWidth: '0.125em',
        borderColor: 'bg.default',
      },
    },
    fallback: {
      lineHeight: '1',
      textTransform: 'uppercase',
      fontWeight: 'medium',
      fontSize: 'var(--avatar-font-size)',
      borderRadius: 'var(--avatar-radius)',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--avatar-radius)',
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'full',
    variant: 'subtle',
  },
  variants: {
    size: {
      full: {
        root: {
          '--avatar-size': '100%',
          '--avatar-font-size': '100%',
        },
      },
      '2xs': {
        root: {
          '--avatar-font-size': 'fontSizes.2xs',
          '--avatar-size': 'sizes.6',
        },
      },
      xs: {
        root: {
          '--avatar-font-size': 'fontSizes.xs',
          '--avatar-size': 'sizes.8',
        },
      },
      sm: {
        root: {
          '--avatar-font-size': 'fontSizes.sm',
          '--avatar-size': 'sizes.9',
        },
      },
      md: {
        root: {
          '--avatar-font-size': 'fontSizes.md',
          '--avatar-size': 'sizes.10',
        },
      },
      lg: {
        root: {
          '--avatar-font-size': 'fontSizes.md',
          '--avatar-size': 'sizes.11',
        },
      },
      xl: {
        root: {
          '--avatar-font-size': 'fontSizes.lg',
          '--avatar-size': 'sizes.12',
        },
      },
      '2xl': {
        root: {
          '--avatar-font-size': 'fontSizes.xl',
          '--avatar-size': 'sizes.16',
        },
      },
    },
    variant: {
      solid: {
        root: {
          background: 'colorPalette.solid.bg',
          color: 'colorPalette.solid.fg',
        },
      },
      surface: {
        root: {
          background: 'colorPalette.surface.bg',
          color: 'colorPalette.surface.fg',
          shadow: 'inset 0 0 0px 1px var(--shadow-color)',
          shadowColor: 'colorPalette.surface.border',
        },
      },
      subtle: {
        root: {
          background: 'colorPalette.subtle.bg',
          color: 'colorPalette.subtle.fg',
        },
      },
      outline: {
        root: {
          background: 'colorPalette.outline.bg',
          color: 'colorPalette.outline.fg',
          shadow: 'inset 0 0 0px 1px var(--shadow-color)',
          shadowColor: 'colorPalette.outline.border',
        },
      },
    },
    borderless: {
      true: {
        root: {
          '&[data-group-item]': {
            borderWidth: '0px',
          },
        },
      },
    },
    shape: {
      square: {},
      rounded: {
        root: { '--avatar-radius': 'radii.l3' },
      },
      full: {
        root: { '--avatar-radius': 'radii.full' },
      },
    },
  },
})
