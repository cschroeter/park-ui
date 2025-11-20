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
        fallback: {
          _icon: { width: '3', height: '3' },
        },
      },
      xs: {
        root: {
          '--avatar-font-size': 'fontSizes.xs',
          '--avatar-size': 'sizes.8',
        },
        fallback: {
          _icon: { width: '4', height: '4' },
        },
      },
      sm: {
        root: {
          '--avatar-font-size': 'fontSizes.sm',
          '--avatar-size': 'sizes.9',
        },
        fallback: {
          _icon: { width: '4.5', height: '4.5' },
        },
      },
      md: {
        root: {
          '--avatar-font-size': 'fontSizes.md',
          '--avatar-size': 'sizes.10',
        },
        fallback: {
          _icon: { width: '5', height: '5' },
        },
      },
      lg: {
        root: {
          '--avatar-font-size': 'fontSizes.md',
          '--avatar-size': 'sizes.11',
        },
        fallback: {
          _icon: { width: '5.5', height: '5.5' },
        },
      },
      xl: {
        root: {
          '--avatar-font-size': 'fontSizes.lg',
          '--avatar-size': 'sizes.12',
        },
        fallback: {
          _icon: { width: '6', height: '6' },
        },
      },
      '2xl': {
        root: {
          '--avatar-font-size': 'fontSizes.xl',
          '--avatar-size': 'sizes.16',
        },
        fallback: {
          _icon: { width: '8', height: '8' },
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
