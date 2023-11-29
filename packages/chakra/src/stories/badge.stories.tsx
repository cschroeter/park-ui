import { Badge } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Badge> = {
  component: Badge,
}
export default meta

export const Default = () => <Badge>Badge</Badge>
