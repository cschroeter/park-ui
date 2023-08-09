import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useMediaQuery } from 'usehooks-ts'
import { Button } from '~/components/button'
import { IconButton } from '~/components/icon-button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationNextPageTrigger,
  PaginationPageTrigger,
  PaginationPrevPageTrigger,
} from '~/components/ui/pagination'

export const PaginationDemo = (props: any) => {
  const matches = useMediaQuery('(max-width: 600px)')
  return (
    <Pagination count={90} pageSize={10} siblingCount={matches ? 0 : 1} defaultPage={2} {...props}>
      {({ pages }) => (
        <>
          <PaginationList>
            <PaginationPrevPageTrigger asChild>
              <IconButton variant="tertiary" icon={<FiChevronLeft />} aria-label="Next Page" />
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
              <IconButton variant="tertiary" icon={<FiChevronRight />} aria-label="Next Page" />
            </PaginationNextPageTrigger>
          </PaginationList>
        </>
      )}
    </Pagination>
  )
}
