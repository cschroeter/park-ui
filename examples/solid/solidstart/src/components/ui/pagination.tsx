import * as Ark from '@ark-ui/solid/pagination'
import { styled } from 'styled-system/jsx'
import { pagination, type PaginationVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pagination)

export * from '@ark-ui/solid/pagination'
export type PaginationProps = Ark.PaginationProps & PaginationVariantProps

const PaginationRoot = withProvider(styled(Ark.Pagination), 'root')
export const PaginationEllipsis = withContext(styled(Ark.PaginationEllipsis), 'ellipsis')
export const PaginationList = withContext(styled(Ark.PaginationList), 'list')
export const PaginationListItem = withContext(styled(Ark.PaginationListItem), 'listItem')
export const PaginationNextPageTrigger = withContext(
  styled(Ark.PaginationNextPageTrigger),
  'nextPageTrigger',
)
export const PaginationPageTrigger = withContext(styled(Ark.PaginationPageTrigger), 'pageTrigger')
export const PaginationPrevPageTrigger = withContext(
  styled(Ark.PaginationPrevPageTrigger),
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
