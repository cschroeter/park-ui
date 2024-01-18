import type { Meta } from '@storybook/react'
import { Pagination } from '~/components/ui/pagination'

const meta: Meta = {
  title: 'Components/Pagination',
}

export default meta

export const Base = () => <Pagination count={90} />
export const InitialPage = () => <Pagination count={90} defaultPage={3} />
export const WithPageSizeAndsiblingCount = () => (
  <Pagination count={90} pageSize={9} siblingCount={2} />
)
