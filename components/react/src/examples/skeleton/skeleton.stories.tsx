import type { Meta } from '@storybook/react'
import { Box } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Feedback / Skeleton',
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
export { App as customColors } from './custom-colors'
export { App as feed } from './feed'
export { App as loading } from './loading'
export { App as text } from './text'
export { App as variants } from './variants'
