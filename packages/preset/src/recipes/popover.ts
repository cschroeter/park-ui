import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
  className: 'popover',
  slots: [
    'anchor',
    'arrow',
    'arrowTip',
    'closeTrigger',
    'content',
    'description',
    'indicator',
    'positioner',
    'root',
    'title',
    'trigger',
  ],
  base: {
    positioner: {
      position: 'relative',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'l3',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 'sm',
      zIndex: 'popover',
      p: '4',
      _open: {
        animation: 'ease-in',
      },
      _closed: {
        animation: 'ease-out',
      },
      _hidden: {
        display: 'none',
      },
    },
    title: {
      fontWeight: 'medium',
      textStyle: 'sm',
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
    arrow: {
      '--arrow-size': 'var(--sizes-3)',
      '--arrow-background': 'var(--colors-bg-default)',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
    },
  },
})
