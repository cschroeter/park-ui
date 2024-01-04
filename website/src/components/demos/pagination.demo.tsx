import { Pagination, type PaginationProps } from '~/components/ui/pagination'

export const Demo = (props: PaginationProps) => (
  <Pagination {...props} count={90} pageSize={10} siblingCount={1} defaultPage={2}>
    Label
  </Pagination>
)
