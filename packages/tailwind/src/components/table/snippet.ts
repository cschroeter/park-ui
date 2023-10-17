import { ark } from '@ark-ui/react'
import { createStyleContext } from '~/lib/create-style-context'
import { tableStyles } from './recipe'

const { withProvider, withContext } = createStyleContext(tableStyles)

const TableRoot = withProvider(ark.table, 'root')
export const TableBody = withContext(ark.tbody, 'body')
export const TableCaption = withContext(ark.caption, 'caption')
export const TableCell = withContext(ark.td, 'cell')
export const TableFooter = withContext(ark.tfoot, 'footer')
export const TableHead = withContext(ark.th, 'head')
export const TableHeader = withContext(ark.thead, 'header')
export const TableRow = withContext(ark.tr, 'row')

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
