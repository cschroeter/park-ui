import { Pagination as ArkPagination } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { pagination } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pagination)

export const PaginationRoot = withProvider(styled(ArkPagination.Root), 'root')
export const PaginationEllipsis = withContext(styled(ArkPagination.Ellipsis), 'ellipsis')
export const PaginationItem = withContext(styled(ArkPagination.Item), 'item')
export const PaginationNextTrigger = withContext(styled(ArkPagination.NextTrigger), 'nextTrigger')
export const PaginationPrevTrigger = withContext(styled(ArkPagination.PrevTrigger), 'prevTrigger')

export const Pagination = Object.assign(PaginationRoot, {
  Root: PaginationRoot,
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
})

export type PaginationProps = typeof PaginationRoot
export type PaginationEllipsisProps = typeof PaginationEllipsis
export type PaginationItemProps = typeof PaginationItem
export type PaginationNextTriggerProps = typeof PaginationNextTrigger
export type PaginationPrevTriggerProps = typeof PaginationPrevTrigger
