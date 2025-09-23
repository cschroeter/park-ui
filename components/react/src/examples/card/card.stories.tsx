import type { Meta } from '@storybook/react'
import { Box } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Display / Card',
  decorators: [
    (Story) => (
      <Box maxW="sm">
        <Story />
      </Box>
    ),
  ],
}

export default meta

export { App as basic } from './basic'
