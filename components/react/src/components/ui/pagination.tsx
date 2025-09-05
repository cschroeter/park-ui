'use client'
import { Pagination } from '@ark-ui/react/pagination'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { pagination } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(pagination)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Pagination.Root, 'root')
export const RootProvider = withProvider(Pagination.RootProvider, 'root')
export const Item = withContext(Pagination.Item, 'item')
export const Ellipsis = withContext(Pagination.Ellipsis, 'ellipsis')
export const PrevTrigger = withContext(Pagination.PrevTrigger, 'prevTrigger')
export const NextTrigger = withContext(Pagination.NextTrigger, 'nextTrigger')

export { PaginationContext as Context } from '@ark-ui/react/pagination'
