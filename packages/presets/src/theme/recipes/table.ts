import { defineSlotRecipe } from '@pandacss/dev'

export const table = defineSlotRecipe({
  className: 'table',
  slots: ['root', 'body', 'cell', 'footer', 'head', 'header', 'row', 'caption'],
  base: {
    root: {
      captionSide: 'bottom',
      width: 'full',
    },
    body: {
      '& tr:last-child': {
        borderBottomWidth: '0',
      },
    },
    caption: {
      color: 'fg.muted',
    },
    cell: {
      verticalAlign: 'middle',
    },
    footer: {
      fontWeight: 'medium',
      borderTopWidth: '1px',
      '& tr:last-child': {
        borderBottomWidth: '0',
      },
    },
    head: {
      color: 'fg.muted',
      fontWeight: 'medium',
      textAlign: 'left',
      verticalAlign: 'middle',
    },
    row: {
      borderBottomWidth: '1px',
      transitionDuration: 'normal',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _hover: {
        bg: 'bg.subtle',
      },
      _selected: {
        bg: 'bg.muted',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        root: {
          textStyle: 'sm',
        },
        caption: {
          mt: '4',
        },
        cell: {
          p: '2',
        },
        head: {
          textStyle: 'xs',
          height: '8',
          px: '2',
        },
      },
      md: {
        root: {
          textStyle: 'sm',
        },
        caption: {
          mt: '4',
        },
        cell: {
          p: '4',
        },
        head: {
          height: '12',
          px: '4',
        },
      },
    },
  },
})
