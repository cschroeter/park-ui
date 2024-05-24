import { Pagination as ArkPagination, type PaginationRootProps } from '@ark-ui/react/pagination'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'

export interface PaginationProps extends PaginationRootProps, PaginationVariantProps {}

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const { className, ...rootProps } = props
  const { root, ellipsis, item, prevTrigger, nextTrigger } = pagination()

  return (
    <ArkPagination.Root ref={ref} className={root({ className })} {...rootProps}>
      <ArkPagination.PrevTrigger className={prevTrigger()} asChild>
        <IconButton variant="ghost" aria-label="Next Page">
          <ChevronLeftIcon />
        </IconButton>
      </ArkPagination.PrevTrigger>
      <ArkPagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === 'page' ? (
              <ArkPagination.Item className={item()} key={index} {...page} asChild>
                <Button variant="outline">{page.value}</Button>
              </ArkPagination.Item>
            ) : (
              <ArkPagination.Ellipsis className={ellipsis()} key={index} index={index}>
                &#8230;
              </ArkPagination.Ellipsis>
            ),
          )
        }
      </ArkPagination.Context>
      <ArkPagination.NextTrigger className={nextTrigger()} asChild>
        <IconButton variant="ghost" aria-label="Next Page">
          <ChevronRightIcon />
        </IconButton>
      </ArkPagination.NextTrigger>
    </ArkPagination.Root>
  )
})

Pagination.displayName = 'Pagination'

type PaginationVariantProps = VariantProps<typeof pagination>

const pagination = tv(
  {
    base: 'pagination',
    slots: {
      root: 'pagination__root',
      item: 'pagination__item',
      ellipsis: 'pagination__ellipsis',
      prevTrigger: 'pagination__prevTrigger',
      nextTrigger: 'pagination__nextTrigger',
    },
    variants: {},
  },
  { twMerge: false },
)

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Left</title>
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
    <title>Chevron Right</title>
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
