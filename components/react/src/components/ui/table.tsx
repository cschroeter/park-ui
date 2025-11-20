'use client'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { table } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(table)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(ark.table, 'root')
export const Body = withContext(ark.tbody, 'body')
export const Caption = withContext(ark.caption, 'caption')
export const Cell = withContext(ark.td, 'cell')
export const Foot = withContext(ark.tfoot, 'foot')
export const Head = withContext(ark.thead, 'head')
export const Header = withContext(ark.th, 'header')
export const Row = withContext(ark.tr, 'row')
