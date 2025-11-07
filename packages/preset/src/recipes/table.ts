import { defineSlotRecipe } from '@pandacss/dev'

export const table = defineSlotRecipe({
  className: 'table',
  slots: ['root', 'body', 'cell', 'foot', 'head', 'header', 'row', 'caption'],
  base: {
    root: {
      borderCollapse: 'collapse',
      fontVariantNumeric: 'lining-nums tabular-nums',
      textAlign: 'start',
      verticalAlign: 'top',
      width: 'full',
    },
    cell: {
      alignItems: 'center',
      color: 'fg.muted',
      textAlign: 'start',
      textOverflow: 'ellipsis',
      textStyle: 'sm',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      boxShadow: 'inset 0 -1px 0 0 var(--shadow-color)',
      shadowColor: 'border',
      _pinned: {
        bg: 'inherit',
        boxShadow: 'inset 0 -1px 0 0 var(--shadow-color)',
        overflow: 'unset',
        position: 'sticky',
        shadowColor: 'border',
        zIndex: 1,
      },
    },
    row: {
      _last: { '& td': { boxShadow: 'none' } },
    },
    header: {
      textAlign: 'left',
      verticalAlign: 'middle',
      boxShadow: 'inset 0 -1px 0 0 var(--shadow-color)',
      shadowColor: 'border',
      _pinned: {
        position: 'sticky',
        bg: 'inherit',
        zIndex: 2,
      },
    },
    head: {
      color: 'fg.muted',
      fontWeight: 'semibold',
      textAlign: 'start',
      whiteSpace: 'nowrap',
      textStyle: 'xs',
    },
    caption: {
      color: 'fg.subtle',
      fontWeight: 'medium',
    },
    foot: {
      fontWeight: 'medium',
      '& td': { boxShadow: 'inset 0 1px 0 0 var(--shadow-color)!', shadowColor: 'border' },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'plain',
  },
  variants: {
    variant: {
      surface: {
        header: { bg: 'gray.surface.bg.hover' },
        row: { bg: 'gray.surface.bg' },
      },
      plain: {},
    },
    striped: {
      true: {
        row: { '&:nth-of-type(odd) td': { bg: 'gray.surface.bg.hover' } },
      },
    },
    interactive: {
      true: {
        body: { '& tr': { _hover: { bg: 'gray.surface.bg.hover' } } },
      },
    },
    columnBorder: {
      true: {
        header: { '&:not(:last-of-type)': { borderInlineEndWidth: '1px' } },
        cell: { '&:not(:last-of-type)': { borderInlineEndWidth: '1px' } },
      },
    },
    stickyHeader: {
      true: {
        head: {
          '& :where(tr)': {
            top: 'var(--table-sticky-offset, 0)',
            position: 'sticky',
            zIndex: 2,
          },
        },
      },
    },
    size: {
      md: {
        root: { textStyle: 'sm' },
        header: { px: '3', py: '3' },
        cell: { px: '3', py: '3' },
      },
    },
  },
})
