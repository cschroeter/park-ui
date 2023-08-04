import { tabsAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(tabsAnatomy.build())

export const tabs = defineRecipe({
  className: 'tabs',
  description: 'A tabs style',
  base: parts({
    root: {},
    tablist: {
      display: 'flex',
      flexDirection: {
        _horizontal: 'row',
        _vertical: 'column',
      },
      gap: {
        _horizontal: '4',
        _vertical: '1',
      },
      borderBottomWidth: {
        _horizontal: '1px',
      },
      borderLeftWidth: {
        _vertical: '1px',
      },
      position: 'relative',
    },
    trigger: {
      transitionDuration: 'normal',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
      cursor: 'pointer',
      color: 'fg.subtle',
      fontWeight: 'semibold',
      px: {
        _horizontal: '1',
        _vertical: '3',
      },
      pb: {
        _horizontal: '3',
      },
      py: {
        _vertical: '1.5',
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
      background: 'fg.default',
      height: {
        _horizontal: '2px',
      },
      bottom: {
        _horizontal: '-1px',
      },
      width: {
        _vertical: '2px',
      },
      left: {
        _vertical: '-1px',
      },
    },
    content: {
      mt: '5',
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: parts({
        trigger: {
          textStyle: 'sm',
        },
      }),
      md: parts({
        trigger: {
          textStyle: 'md',
        },
      }),
    },
  },
})
