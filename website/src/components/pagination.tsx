import {
  Pagination as ArkPagination,
  type PaginationProps as ArkPaginationProps,
} from '@ark-ui/react/pagination'
import { styled } from 'styled-system/jsx'
import { pagination, type PaginationVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/pagination'

export type PaginationProps = PaginationVariantProps & ArkPaginationProps
export const Pagination = styled(ArkPagination, pagination)
