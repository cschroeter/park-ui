import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import type { PaginationProps } from '~/components/ui/pagination'
import * as Pagination from '~/components/ui/pagination'

export const Demo = (props: PaginationProps) => {
  return (
    <Pagination.Root count={90} pageSize={10} siblingCount={1} defaultPage={2} {...props}>
      {({ pages }) => (
        <>
          <Pagination.PrevTrigger asChild>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronLeftIcon />
            </IconButton>
          </Pagination.PrevTrigger>

          {pages.map((page, index) =>
            page.type === 'page' ? (
              <Pagination.Item key={index} {...page} asChild>
                <Button variant="outline">{page.value}</Button>
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis key={index} index={index}>
                &#8230;
              </Pagination.Ellipsis>
            ),
          )}
          <Pagination.NextTrigger asChild>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronRightIcon />
            </IconButton>
          </Pagination.NextTrigger>
        </>
      )}
    </Pagination.Root>
  )
}
