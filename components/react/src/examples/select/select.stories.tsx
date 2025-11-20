import type { Meta } from '@storybook/react'
import { Box } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Forms / Select',
  decorators: [
    (Story) => (
      <Box maxW="md">
        <Story />
      </Box>
    ),
  ],
}

export default meta

export { App as basic } from './basic'
export { App as optionGroup } from './option-group'
export { App as sizes } from './sizes'
