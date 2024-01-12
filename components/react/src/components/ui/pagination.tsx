import { Pagination as ArkPagination } from '@ark-ui/react/pagination'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { pagination } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pagination)

const Pagination = withProvider(styled(ArkPagination.Root), 'root')
const PaginationEllipsis = withContext(styled(ArkPagination.Ellipsis), 'ellipsis')
const PaginationItem = withContext(styled(ArkPagination.Item), 'item')
const PaginationNextTrigger = withContext(styled(ArkPagination.NextTrigger), 'nextTrigger')
const PaginationPrevTrigger = withContext(styled(ArkPagination.PrevTrigger), 'prevTrigger')

const Root = Pagination
const Ellipsis = PaginationEllipsis
const Item = PaginationItem
const NextTrigger = PaginationNextTrigger
const PrevTrigger = PaginationPrevTrigger

export {
  Ellipsis,
  Item,
  NextTrigger,
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PrevTrigger,
  Root,
}

export interface PaginationProps extends HTMLStyledProps<typeof Pagination> {}
export interface PaginationEllipsisProps extends HTMLStyledProps<typeof PaginationEllipsis> {}
export interface PaginationItemProps extends HTMLStyledProps<typeof PaginationItem> {}
export interface PaginationNextTriggerProps extends HTMLStyledProps<typeof PaginationNextTrigger> {}
export interface PaginationPrevTriggerProps extends HTMLStyledProps<typeof PaginationPrevTrigger> {}
