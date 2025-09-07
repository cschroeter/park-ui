import { defineSlotRecipe } from '@pandacss/dev'

export const scrollArea = defineSlotRecipe({
  className: 'scroll-area',
  slots: ['root', 'viewport', 'content', 'scrollbar', 'thumb', 'corner'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      '--scrollbar-margin': '0px',
      '--scrollbar-size': 'calc(var(--thumb-size) + calc(var(--scrollbar-margin) * 2))',
    },
    viewport: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    content: {
      minWidth: '100%',
    },
    scrollbar: {
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
      touchAction: 'none',
      userSelect: 'none',
      zIndex: 'overlay',
      _vertical: {
        flexDirection: 'column',
        width: 'var(--scrollbar-size)',
        py: 'var(--scrollbar-margin)',
        '&:not([data-overflow-y])': {
          display: 'none',
        },
      },
      _horizontal: {
        flexDirection: 'row',
        height: 'var(--scrollbar-size)',
        px: 'var(--scrollbar-margin)',
        '&:not([data-overflow-x])': {
          display: 'none',
        },
      },
    },
    thumb: {
      borderRadius: 'full',
      bg: 'var(--thumb-bg)',
      transitionDuration: 'normal',
      transitionProperty: 'background, color, box-shadow',
      transitionTimingFunction: 'default',
      _vertical: { width: 'var(--thumb-size)' },
      _horizontal: { height: 'var(--thumb-size)' },
    },
    corner: {},
  },
  variants: {
    variant: {
      auto: {
        scrollbar: {
          '&[data-scrolling]': {
            '--thumb-bg': '{colors.gray.a8}',
          },
        },
      },
      visible: {
        content: {
          '&[data-overflow-y]': {
            pe: 'calc(var(--scrollbar-size) * 2)',
          },
          '&[data-overflow-x]': {
            pb: 'calc(var(--scrollbar-size) * 2)',
          },
        },
        scrollbar: {
          bg: 'gray.a3',
          borderRadius: 'full',
        },
        thumb: {
          '--thumb-bg': '{colors.gray.a8}',
        },
      },
    },
    size: {
      xs: {
        root: {
          '--thumb-size': 'sizes.1',
        },
      },
      sm: {
        root: {
          '--thumb-size': 'sizes.1.5',
        },
      },
      md: {
        root: {
          '--thumb-size': 'sizes.2',
        },
      },
      lg: {
        root: {
          '--thumb-size': 'sizes.2.5',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'auto',
  },
})
