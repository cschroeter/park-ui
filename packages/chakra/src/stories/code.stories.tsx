import { Code } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Code> = {
  component: Code,
}
export default meta

export const Default = () => <Code>Code</Code>
