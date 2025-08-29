import { dialogAnatomy } from '@ark-ui/react/dialog'
import { defineSlotRecipe } from '@pandacss/dev'

export const drawer = defineSlotRecipe({
  className: 'drawer',
  slots: dialogAnatomy.extendWith('header', 'body', 'footer').keys(),
  base: {
    backdrop: {
      backdropFilter: 'blur(4px)',
      background: {
        _light: 'white.a10',
        _dark: 'black.a10',
      },
      height: '100vh',
      left: '0',
      position: 'fixed',
      top: '0',
      width: '100vw',
      zIndex: 'overlay',
      _open: {
        animation: 'backdrop-in',
      },
      _closed: {
        animation: 'backdrop-out',
      },
    },
    positioner: {
      alignItems: 'center',
      display: 'flex',
      height: '100dvh',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      width: { base: '100vw', sm: 'sm' },
      zIndex: 'modal',
    },
    content: {
      background: 'bg.default',
      boxShadow: 'lg',
      display: 'grid',
      divideY: '1px',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateAreas: `
        'header'
        'body'
        'footer'
      `,
      height: 'full',
      width: 'full',
      _hidden: {
        display: 'none',
      },
      _open: {
        animationDuration: 'slowest',
        animationTimingFunction: 'ease-in',
      },
      _closed: {
        animationDuration: 'slower',
        animationTimingFunction: 'ease-out',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      gridArea: 'header',
      pt: { base: '4', md: '6' },
      pb: '4',
      px: { base: '4', md: '6' },
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      gridArea: 'body',
      overflow: 'auto',
      p: { base: '4', md: '6' },
    },
    footer: {
      display: 'flex',
      gridArea: 'footer',
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
    variant: 'right',
  },
  variants: {
    variant: {
      left: {
        positioner: {
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
        positioner: {
          right: 0,
        },
        content: {
          _open: {
            animationName: 'slide-from-right-full, fade-in',
          },
          _closed: {
            animationName: 'slide-to-right-full, fade-out',
          },
        },
      },
    },
  },
})
