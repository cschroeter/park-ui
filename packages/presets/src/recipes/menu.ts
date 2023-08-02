import { menuAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(menuAnatomy.build())

const itemStyle = {
  alignItems: 'center',
  borderRadius: 'xs',
  color: 'fg.emphasized',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: 'medium',
  textStyle: 'sm',
  transitionDuration: 'fast',
  transitionProperty: 'background-color, color',
  transitionTimingFunction: 'ease-out',
  _hover: {
    color: 'fg.default',
    background: 'bg.subtle',
  },
  _highlighted: {
    color: 'fg.default',
    background: 'bg.subtle',
  },
} as const

export const menu = defineRecipe({
  className: 'menu',
  description: 'A menu style',
  base: parts({
    itemGroupLabel: {
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'sm',
      borderWidth: '1px',
      boxShadow: 'lg',
      _hidden: {
        display: 'none',
      },
      display: 'flex',
      flexDirection: 'column',
      outline: 'none',
    },
    itemGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    item: itemStyle,
    optionItem: itemStyle,
    triggerItem: itemStyle,
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: parts({
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
      }),
      sm: parts({
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
      }),
      md: parts({
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
      }),
    },
  },
})
