import {
  Pagination as ArkPagination,
  type PaginationProps as ArkPaginationProps,
} from '@ark-ui/react/pagination'
import { forwardRef } from 'react'
import { cx } from 'styled-system/css'
import { pagination, type PaginationVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'

export interface PaginationProps
  extends Assign<JsxStyleProps, ArkPaginationProps>,
    PaginationVariantProps {}

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const [variantProps, rootProps] = pagination.splitVariantProps(props)
  const styles = pagination(variantProps)

  return (
    <ArkPagination.Root ref={ref} className={cx(styles.root)} {...rootProps}>
      {({ pages }) => (
        <>
          <ArkPagination.PrevTrigger className={styles.prevTrigger} asChild>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronLeftIcon />
            </IconButton>
          </ArkPagination.PrevTrigger>
          {pages.map((page, index) =>
            page.type === 'page' ? (
              <ArkPagination.Item className={styles.item} key={index} {...page} asChild>
                <Button variant="outline">{page.value}</Button>
              </ArkPagination.Item>
            ) : (
              <ArkPagination.Ellipsis className={styles.ellipsis} key={index} index={index}>
                &#8230;
              </ArkPagination.Ellipsis>
            ),
          )}
          <ArkPagination.NextTrigger className={styles.nextTrigger} asChild>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronRightIcon />
            </IconButton>
          </ArkPagination.NextTrigger>
        </>
      )}
    </ArkPagination.Root>
  )
})

Pagination.displayName = 'Pagination'

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15 18l-6-6l6-6"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
)
