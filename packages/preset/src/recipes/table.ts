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
      row: {
        '&:not(:last-of-type)': {
          borderBottomWidth: '1px',
        },
      },
    },
    cell: {
      textAlign: 'start',
      alignItems: 'center',
      color: 'fg.muted',
      textStyle: 'sm',
    },
    header: {
      fontWeight: 'medium',
      textAlign: 'left',
      verticalAlign: 'middle',
    },
    head: {
      fontWeight: 'semibold',
      textAlign: 'start',
      borderBottomWidth: '1px',
    },
    caption: {
      color: 'fg.subtle',
      fontWeight: 'medium',
    },
    foot: {
      fontWeight: 'medium',
      borderTopWidth: '1px',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'plain',
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderWidth: '1px',
        },
        head: {
          bg: 'bg.subtle',
        },
      },
      plain: {},
    },
    striped: {
      true: {
        row: {
          '&:nth-of-type(odd) td': {
            bg: 'bg.subtle',
          },
        },
      },
    },
    interactive: {
      true: {
        body: {
          '& tr': {
            _hover: {
              bg: 'bg.subtle',
            },
          },
        },
      },
    },
    columnBorder: {
      true: {
        header: {
          '&:not(:last-of-type)': {
            borderInlineEndWidth: '1px',
          },
        },
        cell: {
          '&:not(:last-of-type)': {
            borderInlineEndWidth: '1px',
          },
        },
      },
    },
    stickyHeader: {
      true: {
        head: {
          '& :where(tr)': {
            top: 'var(--table-sticky-offset, 0)',
            position: 'sticky',
            zIndex: 1,
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          textStyle: 'sm',
        },
        header: {
          px: '2',
          py: '2',
        },
        cell: {
          px: '2',
          py: '2',
        },
      },
      md: {
        root: {
          textStyle: 'sm',
        },
        header: {
          px: '3',
          py: '3',
        },
        cell: {
          px: '3',
          py: '3',
        },
      },
      lg: {
        root: {
          textStyle: 'md',
        },
        header: {
          px: '4',
          py: '3',
        },
        cell: {
          px: '4',
          py: '3',
        },
      },
    },
  },
})
