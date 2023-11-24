import { Input } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Input> = {
  component: Input,
}

export const Default = () => <Input placeholder="Input" />

export default meta
