import type { Meta } from 'storybook-solidjs-vite'
import { Box } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Forms / Combobox',
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
export { App as sizes } from './sizes'
export { App as variants } from './variants'
