import { menuAnatomy } from '@ark-ui/react/menu'
import { defineSlotRecipe } from '@pandacss/dev'

export const menu = defineSlotRecipe({
  className: 'menu',
  slots: menuAnatomy.keys(),
  base: {
    content: {
      '--menu-z-index': 'zIndex.dropdown',

      bg: 'bg.default',
      borderRadius: 'l3',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'var(--available-height)',
      outline: '0',
      overflow: 'hidden',
      overflowY: 'auto',
      position: 'relative',
      zIndex: 'calc(var(--menu-z-index) + var(--layer-index, 0))',
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationDuration: 'faster',
      },
    },
    item: {
      alignItems: 'center',
      borderRadius: 'l2',
      display: 'flex',
      flex: '0 0 auto',
      fontWeight: 'medium',
      outline: '0',
      textAlign: 'start',
      textDecoration: 'none',
      userSelect: 'none',
      width: '100%',
      _icon: {
        color: 'gray.plain.fg.muted',
      },
      _highlighted: {
        bg: 'gray.subtle.bg',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    trigger: {
      focusVisibleRing: 'outside',
      focusRingColor: 'colorPalette.solid.bg',
    },

    itemIndicator: {
      justifyContent: 'flex-end',
      display: 'flex',
      flex: '1',
      _checked: {
        _icon: {
          color: 'colorPalette.plain.fg',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },

  variants: {
    size: {
      sm: {
        content: {
          minW: '40',
          padding: '1.5',
          scrollPadding: '1.5',
          gap: '0.5',
        },
        separator: {
          my: '0.5',
          mx: '-1.5',
        },
        item: {
          gap: '2',
          textStyle: 'sm',
          py: '2',
          px: '1.5',
          _icon: {
            width: '4',
            height: '4',
          },
        },
      },
      md: {
        content: {
          minW: '44',
          padding: '1.5',
          scrollPadding: '1.5',
          gap: '0.5',
        },
        separator: {
          my: '0.5',
          mx: '-1.5',
        },
        item: {
          gap: '3',
          textStyle: 'sm',
          py: '2.5',
          px: '2',
          _icon: {
            width: '5',
            height: '5',
          },
        },
        itemIndicator: {
          _icon: {
            width: '4',
            height: '4',
          },
        },
      },
      lg: {
        content: {
          minW: '48',
          padding: '1.5',
          scrollPadding: '1.5',
          gap: '0.5',
        },
        separator: {
          my: '0.5',
          mx: '-1.5',
        },
        item: {
          gap: '3',
          textStyle: 'md',
          py: '2.5',
          px: '2.5',
          _icon: {
            width: '5',
            height: '5',
          },
        },
      },
    },
  },
})
