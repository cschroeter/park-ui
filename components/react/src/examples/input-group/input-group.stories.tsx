import type { Meta } from '@storybook/react'
import { Box } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Forms / Input Group',
  decorators: [
    (Story) => (
      <Box maxW="xl">
        <Story />
      </Box>
    ),
  ],
}

export default meta

export { App as addon } from './addon'
export { App as basic } from './basic'
export { App as element } from './element'
export { App as sizes } from './sizes'
export { App as variants } from './variants'
