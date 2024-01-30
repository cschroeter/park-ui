import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
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

export const Table = {
  Root: TableRoot,
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
}

export interface TableRootProps extends ComponentProps<typeof TableRoot> {}
export interface TableBodyProps extends ComponentProps<typeof TableBody> {}
export interface TableCaptionProps extends ComponentProps<typeof TableCaption> {}
export interface TableCellProps extends ComponentProps<typeof TableCell> {}
export interface TableFooterProps extends ComponentProps<typeof TableFooter> {}
export interface TableHeadProps extends ComponentProps<typeof TableHead> {}
export interface TableHeaderProps extends ComponentProps<typeof TableHeader> {}
export interface TableRowProps extends ComponentProps<typeof TableRow> {}
