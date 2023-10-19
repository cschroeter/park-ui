import { dialogAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const drawer = defineSlotRecipe({
  className: 'drawer',
  slots: [...dialogAnatomy.keys(), 'header', 'body', 'footer'],
  jsx: ['Drawer', /Drawer\.+/],
  base: {
    backdrop: {
      backdropFilter: 'blur(4px)',
      background: {
        base: 'white.a10',
        _dark: 'black.a10',
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
      width: { base: 'full', sm: 'sm' },
      zIndex: 'modal',
    },
    content: {
      background: 'bg.default',
      boxShadow: 'xl',
      display: 'grid',
      divideY: '1px',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto',
      height: 'full',
      width: 'full',
      _hidden: {
        display: 'none',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      pt: { base: '4', md: '6' },
      pb: '4',
      px: { base: '4', md: '6' },
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      p: { base: '4', md: '6' },
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      py: '4',
      px: { base: '4', md: '6' },
    },
    title: {
      color: 'fg.default',
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
