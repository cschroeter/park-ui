import { menuAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'

const itemStyle = {
  alignItems: 'center',
  borderRadius: 'l1',
  color: 'fg.emphasized',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: 'medium',
  textStyle: 'sm',
  transitionDuration: 'fast',
  transitionProperty: 'background, color',
  transitionTimingFunction: 'default',
  _hover: {
    color: 'fg.default',
    background: 'bg.subtle',
  },
  _highlighted: {
    color: 'fg.default',
    background: 'bg.subtle',
  },
} as const

export const menu = defineSlotRecipe({
  className: 'menu',
  description: 'A menu style',
  slots: menuAnatomy.keys(),
  base: {
    itemGroupLabel: {
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      outline: 'none',
      _hidden: {
        display: 'none',
      },
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
    },
    itemGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    item: itemStyle,
    optionItem: itemStyle,
    triggerItem: itemStyle,
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: {
        itemGroup: {
          gap: '1',
        },
        itemGroupLabel: {
          py: '1.5',
          px: '1.5',
          mx: '1',
        },
        content: {
          py: '1',
          gap: '1',
          minW: '24',
        },
        item: {
          h: '8',
          px: '1.5',
          mx: '1',
        },
        optionItem: {
          h: '8',
          px: '1.5',
          mx: '1',
        },
        triggerItem: {
          h: '8',
          px: '1.5',
          mx: '1.5',
        },
      },
      sm: {
        itemGroup: {
          gap: '1',
        },
        itemGroupLabel: {
          py: '2',
          px: '2',
          mx: '1',
        },
        content: {
          py: '1',
          gap: '1',
          minW: '32',
        },
        item: {
          h: '9',
          px: '2',
          mx: '1',
        },
        optionItem: {
          h: '9',
          px: '2',
          mx: '1',
        },
        triggerItem: {
          h: '9',
          px: '2',
          mx: '1.5',
        },
      },
      md: {
        itemGroup: {
          gap: '1',
        },
        itemGroupLabel: {
          py: '2.5',
          px: '2.5',
          mx: '1',
        },
        content: {
          py: '1',
          gap: '1',
          minW: '44',
        },
        item: {
          h: '10',
          px: '2.5',
          mx: '1',
        },
        optionItem: {
          h: '10',
          px: '2.5',
          mx: '1',
        },
        triggerItem: {
          h: '10',
          px: '2.5',
          mx: '1.5',
        },
      },
    },
  },
})
