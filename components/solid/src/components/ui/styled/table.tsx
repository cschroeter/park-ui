import { type Assign, type PolymorphicProps, ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { table } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(table)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<Assign<HTMLStyledProps<'table'>, PolymorphicProps<'table'>>>(
  ark.table,
  'root',
)

export const Body = withContext<Assign<HTMLStyledProps<'tbody'>, PolymorphicProps<'tbody'>>>(
  ark.tbody,
  'body',
)

export const Caption = withContext<Assign<HTMLStyledProps<'caption'>, PolymorphicProps<'caption'>>>(
  ark.caption,
  'caption',
)

export const Cell = withContext<Assign<HTMLStyledProps<'td'>, PolymorphicProps<'td'>>>(
  ark.td,
  'cell',
)

export const Foot = withContext<Assign<HTMLStyledProps<'tfoot'>, PolymorphicProps<'tfoot'>>>(
  ark.tfoot,
  'footer',
)

export const Head = withContext<Assign<HTMLStyledProps<'head'>, PolymorphicProps<'head'>>>(
  ark.thead,
  'head',
)

export const Header = withContext<Assign<HTMLStyledProps<'th'>, PolymorphicProps<'th'>>>(
  ark.th,
  'header',
)

export const Row = withContext<Assign<HTMLStyledProps<'tr'>, PolymorphicProps<'tr'>>>(ark.tr, 'row')
