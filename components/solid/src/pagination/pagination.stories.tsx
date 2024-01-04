import type { Meta } from 'storybook-solidjs'
import { Pagination, type PaginationProps } from './pagination'

const meta: Meta<PaginationProps> = {
  title: 'Pagination',
  component: Pagination,
}

export default meta

export const Base = () => <Pagination count={90} />
export const InitialPage = () => <Pagination count={90} page={3} />
export const WithPageSizeAndsiblingCount = () => (
  <Pagination count={90} pageSize={9} siblingCount={2} />
)
