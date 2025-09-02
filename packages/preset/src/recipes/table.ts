import { defineSlotRecipe } from '@pandacss/dev'

export const table = defineSlotRecipe({
  className: 'table',
  slots: ['root', 'body', 'cell', 'foot', 'head', 'header', 'row', 'caption'],
  base: {
    root: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
      textAlign: 'start',
      verticalAlign: 'top',
    },
    row: {
      transitionDuration: 'normal',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _selected: {
        bg: 'bg.subtle',
      },
    },
    cell: {
      textAlign: 'start',
      alignItems: 'center',
    },
    head: {
      fontWeight: 'medium',
      textAlign: 'start',
      color: 'fg.default',
    },
    caption: {
      color: 'fg.subtle',
      fontWeight: 'medium',
    },
    foot: {
      fontWeight: 'medium',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        root: {
          boxShadow: '0 0 0 1px {colors.border.subtle}',
          overflow: 'hidden',
        },
        header: {
          borderBottomWidth: '1px',
        },
        head: {
          bg: 'bg.subtle',
        },
        row: {
          '&:not(:last-of-type)': {
            borderBottomWidth: '1px',
          },
        },
        foot: {
          borderTopWidth: '1px',
        },
      },
      plain: {
        header: {
          borderBottomWidth: '1px',
        },
        cell: {
          borderBottomWidth: '1px',
        },
        row: {
          bg: 'bg.default',
        },
      },
    },
    striped: {
      true: {
        row: {
          '&:nth-of-type(even) td': {
            bg: 'bg.subtle',
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          textStyle: 'sm',
        },
        caption: {
          mt: '4',
        },
        cell: {
          height: '11',
          px: '3',
        },
        header: {
          height: '11',
          px: '3',
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
          height: '14',
          px: '4',
        },
        header: {
          height: '11',
          px: '4',
        },
      },
    },
  },
})
