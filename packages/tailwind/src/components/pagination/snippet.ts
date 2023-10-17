import * as Ark from '@ark-ui/react/pagination'
import { createStyleContext } from '~/lib/create-style-context'
import { paginationStyles } from './recipe'
export * from '@ark-ui/react/pagination'

export type PaginationProps = React.ComponentProps<typeof Pagination>

const { withProvider, withContext } = createStyleContext(paginationStyles)

const PaginationRoot = withProvider(Ark.Pagination.Root, 'root')
export const PaginationEllipsis = withContext(Ark.Pagination.Ellipsis, 'ellipsis')
export const PaginationList = withContext(Ark.Pagination.List, 'list')
export const PaginationListItem = withContext(Ark.Pagination.ListItem, 'listItem')
export const PaginationNextPageTrigger = withContext(
  Ark.Pagination.NextPageTrigger,
  'nextPageTrigger',
)
export const PaginationPageTrigger = withContext(Ark.Pagination.PageTrigger, 'pageTrigger')
export const PaginationPrevPageTrigger = withContext(
  Ark.Pagination.PrevPageTrigger,
  'prevPageTrigger',
)

export const Pagination = Object.assign(PaginationRoot, {
  Root: PaginationRoot,
  Ellipsis: PaginationEllipsis,
  List: PaginationList,
  ListItem: PaginationListItem,
  NextPageTrigger: PaginationNextPageTrigger,
  PageTrigger: PaginationPageTrigger,
  PrevPageTrigger: PaginationPrevPageTrigger,
})
