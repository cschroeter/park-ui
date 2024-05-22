import { type Assign, type HTMLArkProps, ark } from '@ark-ui/solid'
import { table } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(table)

export interface RootProps extends Assign<JsxStyleProps, HTMLArkProps<'table'>> {}
export const Root = withProvider<RootProps>(ark.table, 'root')

export const Body = withContext<Assign<JsxStyleProps, HTMLArkProps<'tbody'>>>(ark.tbody, 'body')

export const Caption = withContext<Assign<JsxStyleProps, HTMLArkProps<'caption'>>>(
  ark.caption,
  'caption',
)

export const Cell = withContext<Assign<JsxStyleProps, HTMLArkProps<'td'>>>(ark.td, 'cell')

export const Foot = withContext<Assign<JsxStyleProps, HTMLArkProps<'tfoot'>>>(ark.tfoot, 'footer')

export const Head = withContext<Assign<JsxStyleProps, HTMLArkProps<'thead'>>>(ark.thead, 'head')

export const Header = withContext<Assign<JsxStyleProps, HTMLArkProps<'th'>>>(ark.th, 'header')

export const Row = withContext<Assign<JsxStyleProps, HTMLArkProps<'tr'>>>(ark.tr, 'row')
