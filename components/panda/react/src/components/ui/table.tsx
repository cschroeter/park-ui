import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { table } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(table)

const Table = withProvider(styled(ark.table), 'root')
const TableBody = withContext(styled(ark.tbody), 'body')
const TableCaption = withContext(styled(ark.caption), 'caption')
const TableCell = withContext(styled(ark.td), 'cell')
const TableFooter = withContext(styled(ark.tfoot), 'footer')
const TableHead = withContext(styled(ark.thead), 'head')
const TableHeader = withContext(styled(ark.th), 'header')
const TableRow = withContext(styled(ark.tr), 'row')

const Root = Table
const Body = TableBody
const Caption = TableCaption
const Cell = TableCell
const Footer = TableFooter
const Head = TableHead
const Header = TableHeader
const Row = TableRow

export {
  Body,
  Caption,
  Cell,
  Footer,
  Head,
  Header,
  Root,
  Row,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
}

export interface TableProps extends ComponentProps<typeof Table> {}
export interface TableBodyProps extends ComponentProps<typeof TableBody> {}
export interface TableCaptionProps extends ComponentProps<typeof TableCaption> {}
export interface TableCellProps extends ComponentProps<typeof TableCell> {}
export interface TableFooterProps extends ComponentProps<typeof TableFooter> {}
export interface TableHeadProps extends ComponentProps<typeof TableHead> {}
export interface TableHeaderProps extends ComponentProps<typeof TableHeader> {}
export interface TableRowProps extends ComponentProps<typeof TableRow> {}
