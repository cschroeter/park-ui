import { ark } from '@ark-ui/react/factory'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Table')

const Table = withProvider(chakra(ark.table), 'root')
const TableBody = withContext(chakra(ark.tbody), 'body')
const TableCaption = withContext(chakra(ark.caption), 'caption')
const TableCell = withContext(chakra(ark.td), 'cell')
const TableFooter = withContext(chakra(ark.tfoot), 'footer')
const TableHead = withContext(chakra(ark.thead), 'head')
const TableHeader = withContext(chakra(ark.th), 'header')
const TableRow = withContext(chakra(ark.tr), 'row')

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

export interface TableProps extends HTMLChakraProps<typeof Table> {}
export interface TableBodyProps extends HTMLChakraProps<typeof TableBody> {}
export interface TableCaptionProps extends HTMLChakraProps<typeof TableCaption> {}
export interface TableCellProps extends HTMLChakraProps<typeof TableCell> {}
export interface TableFooterProps extends HTMLChakraProps<typeof TableFooter> {}
export interface TableHeadProps extends HTMLChakraProps<typeof TableHead> {}
export interface TableHeaderProps extends HTMLChakraProps<typeof TableHeader> {}
export interface TableRowProps extends HTMLChakraProps<typeof TableRow> {}
