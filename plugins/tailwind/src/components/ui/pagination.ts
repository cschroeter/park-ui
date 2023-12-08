import { Pagination as ArkPagination } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'pagination',
  slots: {
    root: 'pagination__root',
    item: 'pagination__item',
    ellipsis: 'pagination__ellipsis',
    prevTrigger: 'pagination__prevTrigger',
    nextTrigger: 'pagination__nextTrigger',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

export const PaginationRoot = withProvider(ArkPagination.Root, 'root')
export const PaginationEllipsis = withContext(ArkPagination.Ellipsis, 'ellipsis')
export const PaginationItem = withContext(ArkPagination.Item, 'item')
export const PaginationNextTrigger = withContext(ArkPagination.NextTrigger, 'nextTrigger')
export const PaginationPrevTrigger = withContext(ArkPagination.PrevTrigger, 'prevTrigger')

export const Pagination = Object.assign(PaginationRoot, {
  Root: PaginationRoot,
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  NextTrigger: PaginationNextTrigger,
  PrevTrigger: PaginationPrevTrigger,
})
