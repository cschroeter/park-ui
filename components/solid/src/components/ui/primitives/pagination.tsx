import { Pagination, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type PaginationVariantProps, pagination } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pagination)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'nav'>, Pagination.RootProviderProps>, PaginationVariantProps>
>(Pagination.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'nav'>, Pagination.RootProps>, PaginationVariantProps>
>(Pagination.Root, 'root')

export const Ellipsis = withContext<Assign<HTMLStyledProps<'div'>, Pagination.EllipsisProps>>(
  Pagination.Ellipsis,
  'ellipsis',
)

export const Item = withContext<Assign<HTMLStyledProps<'button'>, Pagination.ItemProps>>(
  Pagination.Item,
  'item',
)

export const NextTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Pagination.NextTriggerProps>
>(Pagination.NextTrigger, 'nextTrigger')

export const PrevTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Pagination.PrevTriggerProps>
>(Pagination.PrevTrigger, 'prevTrigger')

export { PaginationContext as Context } from '@ark-ui/solid'
