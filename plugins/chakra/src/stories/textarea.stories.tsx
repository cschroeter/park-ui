import { Textarea } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
}

export const Default = () => <Textarea />

export default meta
