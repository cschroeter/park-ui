import * as Ark from '@ark-ui/react/pagination'
import { styled } from 'styled-system/jsx'
import { pagination, type PaginationVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/pagination'

const { withProvider, withContext } = createStyleContext(pagination)

export type PaginationProps = Ark.PaginationProps & PaginationVariantProps

const PaginationRoot = withProvider(styled(Ark.Pagination.Root), 'root')
const PaginationEllipsis = withContext(styled(Ark.Pagination.Ellipsis), 'ellipsis')
const PaginationList = withContext(styled(Ark.Pagination.List), 'list')
const PaginationListItem = withContext(styled(Ark.Pagination.ListItem), 'listItem')
const PaginationNextPageTrigger = withContext(
  styled(Ark.Pagination.NextPageTrigger),
  'nextPageTrigger',
)
const PaginationPageTrigger = withContext(styled(Ark.Pagination.PageTrigger), 'pageTrigger')
const PaginationPrevPageTrigger = withContext(
  styled(Ark.Pagination.PrevPageTrigger),
  'prevPageTrigger',
)

const Pagination = Object.assign(PaginationRoot, {
  Root: PaginationRoot,
  Ellipsis: PaginationEllipsis,
  List: PaginationList,
  ListItem: PaginationListItem,
  NextPageTrigger: PaginationNextPageTrigger,
  PageTrigger: PaginationPageTrigger,
  PrevPageTrigger: PaginationPrevPageTrigger,
})

export {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNextPageTrigger,
  PaginationPageTrigger,
  PaginationPrevPageTrigger,
}
