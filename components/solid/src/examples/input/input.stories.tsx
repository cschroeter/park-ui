import type { Meta } from 'storybook-solidjs-vite'
import { Box } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Forms / Input',
  decorators: [
    (Story) => (
      <Box maxW="md">
        <Story />
      </Box>
    ),
  ],
}

export default meta

export { App as addon } from './addon'
export { App as basic } from './basic'
export { App as element } from './element'
export { App as field } from './field'
export { App as invalid } from './invalid'
export { App as required } from './required'
export { App as sizes } from './sizes'
export { App as variants } from './variants'
export { App as withButton } from './with-button'
