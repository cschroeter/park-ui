import { tabsAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'A tabs style',
  slots: tabsAnatomy.keys(),
  base: {
    list: {
      display: 'flex',
      _horizontal: {
        boxShadow: '0 -1px 0 0 inset var(--colors-border-default)',
        flexDirection: 'row',
        gap: '4',
      },
      _vertical: {
        boxShadow: '1px 0 0 0 inset var(--colors-border-default)',
        gap: '1',
        flexDirection: 'column',
      },
      overflow: 'auto',
      position: 'relative',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    trigger: {
      color: 'fg.subtle',
      cursor: 'pointer',
      fontWeight: 'semibold',
      transitionDuration: 'normal',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
      whiteSpace: 'nowrap',
      _horizontal: {
        px: '1',
        pb: '3',
      },
      _vertical: {
        px: '3',
        py: '1.5',
      },
      _disabled: {
        color: 'fg.disabled',
        cursor: 'not-allowed',
        _hover: {
          color: 'fg.disabled',
        },
      },
      _hover: {
        color: 'fg.muted',
      },
      _selected: {
        color: 'fg.default',
        _hover: {
          color: 'fg.default',
        },
      },
    },
    indicator: {
      background: 'accent.default',
      _horizontal: {
        height: '2px',
        bottom: '0',
      },
      _vertical: {
        width: '2px',
        left: '0',
      },
    },
    content: {
      mt: '5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        trigger: {
          textStyle: 'sm',
        },
      },
      md: {
        trigger: {
          textStyle: 'md',
        },
      },
    },
  },
})
