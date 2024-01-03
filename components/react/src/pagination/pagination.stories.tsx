import type { Meta } from '@storybook/react'
import { Pagination, type PaginationProps } from './pagination'

const meta: Meta<PaginationProps> = {
  title: 'Pagination',
  component: Pagination,
}

export default meta

export const Base = () => <Pagination count={90}>Label</Pagination>
export const DefaultPage = () => (
  <Pagination count={90} defaultPage={3}>
    Label
  </Pagination>
)
export const WithPage = () => (
  <Pagination count={90} page={3}>
    Label
  </Pagination>
)
export const WithPageSizeAndsiblingCount = () => (
  <Pagination count={90} pageSize={9} siblingCount={2}>
    Label
  </Pagination>
)
