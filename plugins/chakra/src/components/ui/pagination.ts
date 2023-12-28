import { Pagination as ArkPagination } from '@ark-ui/react/pagination'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Pagination')

const Pagination = withProvider(chakra(ArkPagination.Root), 'root')
const PaginationEllipsis = withContext(chakra(ArkPagination.Ellipsis), 'ellipsis')
const PaginationItem = withContext(chakra(ArkPagination.Item), 'item')
const PaginationNextTrigger = withContext(chakra(ArkPagination.NextTrigger), 'nextTrigger')
const PaginationPrevTrigger = withContext(chakra(ArkPagination.PrevTrigger), 'prevTrigger')

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

export interface PaginationProps extends HTMLChakraProps<typeof Pagination> {}
export interface PaginationEllipsisProps extends HTMLChakraProps<typeof PaginationEllipsis> {}
export interface PaginationItemProps extends HTMLChakraProps<typeof PaginationItem> {}
export interface PaginationNextTriggerProps extends HTMLChakraProps<typeof PaginationNextTrigger> {}
export interface PaginationPrevTriggerProps extends HTMLChakraProps<typeof PaginationPrevTrigger> {}
