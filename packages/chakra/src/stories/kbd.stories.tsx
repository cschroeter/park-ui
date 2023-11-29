import { Kbd } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Kbd> = {
  component: Kbd,
}
export default meta

export const Default = () => <Kbd>⌘ + T</Kbd>
