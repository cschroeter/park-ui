import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { table } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(table)

export interface RootProps extends Assign<JsxStyleProps, HTMLArkProps<'table'>> {}
export const Root = withProvider<HTMLTableElement, RootProps>(ark.table, 'root')

export interface BodyProps extends Assign<JsxStyleProps, HTMLArkProps<'tbody'>> {}
export const Body = withContext<HTMLTableSectionElement, BodyProps>(ark.tbody, 'body')

export interface CaptionProps extends Assign<JsxStyleProps, HTMLArkProps<'caption'>> {}
export const Caption = withContext<HTMLTableCaptionElement, CaptionProps>(ark.caption, 'caption')

export interface CellProps extends Assign<JsxStyleProps, HTMLArkProps<'td'>> {}
export const Cell = withContext<HTMLTableCellElement, CellProps>(ark.td, 'cell')

export interface FootProps extends Assign<JsxStyleProps, HTMLArkProps<'tfoot'>> {}
export const Foot = withContext<HTMLTableSectionElement, FootProps>(ark.tfoot, 'footer')

export interface HeadProps extends Assign<JsxStyleProps, HTMLArkProps<'thead'>> {}
export const Head = withContext<HTMLTableSectionElement, HeadProps>(ark.thead, 'head')

export interface HeaderProps extends Assign<JsxStyleProps, HTMLArkProps<'th'>> {}
export const Header = withContext<HTMLTableCellElement, HeaderProps>(ark.th, 'header')

export interface RowProps extends Assign<JsxStyleProps, HTMLArkProps<'tr'>> {}
export const Row = withContext<HTMLTableRowElement, RowProps>(ark.tr, 'row')
