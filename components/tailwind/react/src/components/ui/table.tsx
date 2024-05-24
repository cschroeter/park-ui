import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const table = tv(
  {
    base: 'table',
    defaultVariants: { size: 'md', variant: 'plain' },
    slots: {
      root: 'table__root',
      body: 'table__body',
      cell: 'table__cell',
      footer: 'table__footer',
      head: 'table__head',
      header: 'table__header',
      row: 'table__row',
      caption: 'table__caption',
    },
    variants: {
      variant: {
        outline: {
          root: 'table__root--variant_outline',
          body: 'table__body--variant_outline',
          cell: 'table__cell--variant_outline',
          footer: 'table__footer--variant_outline',
          head: 'table__head--variant_outline',
          header: 'table__header--variant_outline',
          row: 'table__row--variant_outline',
          caption: 'table__caption--variant_outline',
        },
        plain: {
          root: 'table__root--variant_plain',
          body: 'table__body--variant_plain',
          cell: 'table__cell--variant_plain',
          footer: 'table__footer--variant_plain',
          head: 'table__head--variant_plain',
          header: 'table__header--variant_plain',
          row: 'table__row--variant_plain',
          caption: 'table__caption--variant_plain',
        },
      },
      size: {
        sm: {
          root: 'table__root--size_sm',
          body: 'table__body--size_sm',
          cell: 'table__cell--size_sm',
          footer: 'table__footer--size_sm',
          head: 'table__head--size_sm',
          header: 'table__header--size_sm',
          row: 'table__row--size_sm',
          caption: 'table__caption--size_sm',
        },
        md: {
          root: 'table__root--size_md',
          body: 'table__body--size_md',
          cell: 'table__cell--size_md',
          footer: 'table__footer--size_md',
          head: 'table__head--size_md',
          header: 'table__header--size_md',
          row: 'table__row--size_md',
          caption: 'table__caption--size_md',
        },
      },
    },
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(table)

export interface RootProps extends HTMLArkProps<'table'>, VariantProps<typeof table> {}
export const Root = withProvider<HTMLTableElement, RootProps>(ark.table, 'root')

export const Body = withContext<HTMLTableSectionElement, HTMLArkProps<'tbody'>>(ark.tbody, 'body')

export const Caption = withContext<HTMLTableCaptionElement, HTMLArkProps<'caption'>>(
  ark.caption,
  'caption',
)

export const Cell = withContext<HTMLTableCellElement, HTMLArkProps<'td'>>(ark.td, 'cell')

export const Foot = withContext<HTMLTableSectionElement, HTMLArkProps<'tfoot'>>(ark.tfoot, 'footer')

export const Head = withContext<HTMLTableSectionElement, HTMLArkProps<'thead'>>(ark.thead, 'head')

export const Header = withContext<HTMLTableCellElement, HTMLArkProps<'th'>>(ark.th, 'header')

export const Row = withContext<HTMLTableRowElement, HTMLArkProps<'tr'>>(ark.tr, 'row')
