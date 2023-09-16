import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useMediaQuery } from 'usehooks-ts'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationNextPageTrigger,
  PaginationPageTrigger,
  PaginationPrevPageTrigger,
  type PaginationProps,
} from '~/components/ui/pagination'

export const PaginationDemo = (props: PaginationProps) => {
  const matches = useMediaQuery('(max-width: 600px)')
  return (
    <Pagination count={90} pageSize={10} siblingCount={matches ? 0 : 1} defaultPage={2}>
      {({ pages }) => (
        <>
          <PaginationList>
            <PaginationPrevPageTrigger asChild>
              <IconButton variant="tertiary" aria-label="Next Page">
                <ChevronLeftIcon />
              </IconButton>
            </PaginationPrevPageTrigger>

            {pages.map((page, index) =>
              page.type === 'page' ? (
                <PaginationPageTrigger key={index} {...page} asChild>
                  <Button variant="secondary">{page.value}</Button>
                </PaginationPageTrigger>
              ) : (
                <PaginationEllipsis key={index} index={index}>
                  &#8230;
                </PaginationEllipsis>
              ),
            )}

            <PaginationNextPageTrigger asChild>
              <IconButton variant="tertiary" aria-label="Next Page">
                <ChevronRightIcon />
              </IconButton>
            </PaginationNextPageTrigger>
          </PaginationList>
        </>
      )}
    </Pagination>
  )
}
