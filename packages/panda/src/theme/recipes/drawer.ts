import { dialogAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const drawer = defineSlotRecipe({
  className: 'drawer',
  slots: dialogAnatomy.keys(),
  base: {
    backdrop: {
      backdropFilter: 'blur(4px)',
      background: {
        // TODO: replace when supported in Panda: bg.canvas/80
        base: 'rgba(250, 250, 250, 0.8)',
        _dark: 'rgba(10, 10, 10, 0.8)',
      },
      inset: '0',
      position: 'fixed',
      zIndex: 'overlay',
      _open: {
        animation: 'backdrop-in',
      },
      _closed: {
        animation: 'backdrop-out',
      },
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 'modal',
    },
    content: {
      background: 'bg.default',
      boxShadow: 'xl',
      display: 'flex',
      flexDirection: 'column',
      height: 'full',
      width: { base: 'full', sm: 'sm' },
      overflowY: 'auto',
      position: 'relative',
      _hidden: {
        display: 'none',
      },
      px: {
        base: '4',
        md: '6',
      },
      py: '6',
    },
    title: {
      fontWeight: 'semibold',
      textStyle: 'xl',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
  },
  defaultVariants: {
    placement: 'right',
  },
  variants: {
    placement: {
      left: {
        container: {
          left: 0,
        },
        content: {
          borderRightWidth: '1px',
          _open: {
            animation: 'drawer-in-left',
          },
          _closed: {
            animation: 'drawer-out-left',
          },
        },
      },
      right: {
        container: {
          right: 0,
        },
        content: {
          borderLeftWidth: '1px',
          _open: {
            animation: 'drawer-in-right',
          },
          _closed: {
            animation: 'drawer-out-right',
          },
        },
      },
    },
  },
})
