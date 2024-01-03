import { Pagination, type PaginationProps } from '~/components/ui/pagination'

export const Demo = (props: PaginationProps) => (
  <Pagination count={90} pageSize={10} siblingCount={1} defaultPage={2} {...props}>
    Label
  </Pagination>
)
