import { ark } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { table } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(table)

export const TableRoot = withProvider(styled(ark.table), 'root')
export const TableBody = withContext(styled(ark.tbody), 'body')
export const TableCaption = withContext(styled(ark.caption), 'caption')
export const TableCell = withContext(styled(ark.td), 'cell')
export const TableFooter = withContext(styled(ark.tfoot), 'footer')
export const TableHead = withContext(styled(ark.thead), 'head')
export const TableHeader = withContext(styled(ark.th), 'header')
export const TableRow = withContext(styled(ark.tr), 'row')

export const Table = Object.assign(TableRoot, {
  Root: TableRoot,
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
})

export type TableProps = typeof TableRoot
export type TableBodyProps = typeof TableBody
export type TableCaptionProps = typeof TableCaption
export type TableCellProps = typeof TableCell
export type TableFooterProps = typeof TableFooter
export type TableHeadProps = typeof TableHead
export type TableHeaderProps = typeof TableHeader
export type TableRowProps = typeof TableRow
