import { type Assign, Pagination } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type PaginationVariantProps, pagination } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(pagination)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'nav'>, Pagination.RootProviderBaseProps>, PaginationVariantProps>
>(Pagination.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'nav'>, Pagination.RootBaseProps>, PaginationVariantProps>
>(Pagination.Root, 'root', { forwardProps: ['page'] })

export const Ellipsis = withContext<Assign<HTMLStyledProps<'div'>, Pagination.EllipsisBaseProps>>(
  Pagination.Ellipsis,
  'ellipsis',
)

export const Item = withContext<Assign<HTMLStyledProps<'button'>, Pagination.ItemBaseProps>>(
  Pagination.Item,
  'item',
)

export const NextTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Pagination.NextTriggerBaseProps>
>(Pagination.NextTrigger, 'nextTrigger')

export const PrevTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Pagination.PrevTriggerBaseProps>
>(Pagination.PrevTrigger, 'prevTrigger')

export { PaginationContext as Context } from '@ark-ui/solid'
