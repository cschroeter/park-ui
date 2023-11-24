import * as Ark from '@ark-ui/react/pagination'
import { createStyleContext } from '~/lib/create-style-context'
import { paginationStyles } from './recipe'
export * from '@ark-ui/react/pagination'

export type PaginationProps = React.ComponentProps<typeof Pagination>

const { withProvider, withContext } = createStyleContext(paginationStyles)
const PaginationRoot = withProvider(Ark.Pagination.Root, 'root')
export const PaginationEllipsis = withContext(Ark.Pagination.Ellipsis, 'ellipsis')
export const PaginationNextTrigger = withContext(Ark.Pagination.NextTrigger, 'nextTrigger')
export const PaginationItem = withContext(Ark.Pagination.Item, 'item')
export const PaginationPrevTrigger = withContext(Ark.Pagination.PrevTrigger, 'prevTrigger')

export const Pagination = Object.assign(PaginationRoot, {
  Root: PaginationRoot,
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
})
