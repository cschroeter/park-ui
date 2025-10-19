import { popoverAnatomy } from '@ark-ui/react/popover'
import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
  className: 'popover',
  slots: popoverAnatomy.extendWith('header', 'body', 'footer').keys(),
  base: {
    content: {
      '--popover-bg': 'colors.bg.default',
      '--popover-padding': 'spacing.4',

      background: 'var(--popover-bg)',
      borderRadius: 'l3',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'var(--available-height)',
      outline: '0',
      position: 'relative',
      textStyle: 'sm',
      transformOrigin: 'var(--transform-origin)',
      width: 'xs',
      zIndex: 'calc(var(--z-index-popover) + var(--layer-index, 0))',
      _open: {
        animationStyle: 'scale-fade-in',
        animationDuration: 'fast',
      },
      _closed: {
        animationStyle: 'scale-fade-out',
        animationDuration: 'faster',
      },
    },
    title: {
      color: 'fg.default',
      fontWeight: 'medium',
      textStyle: 'md',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    closeTrigger: {
      position: 'absolute',
      top: '1',
      right: '1',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      pt: 'var(--popover-padding)',
      px: 'var(--popover-padding)',
    },
    body: { p: 'var(--popover-padding)', display: 'flex', flex: '1', flexDirection: 'column' },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '3',
      paddingInline: 'var(--popover-padding)',
      paddingBottom: 'var(--popover-padding)',
    },
    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'var(--popover-bg)',
    },
    arrowTip: {
      borderTopWidth: '0.5px',
      borderInlineStartWidth: '0.5px',
    },
  },
})
