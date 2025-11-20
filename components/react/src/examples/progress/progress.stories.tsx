import type { Meta } from '@storybook/react'
import { Box } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Feedback / Progress',
  decorators: [
    (Story) => (
      <Box maxW="sm">
        <Story />
      </Box>
    ),
  ],
}

export default meta

export { App as animated } from './animated'
export { App as basic } from './basic'
export { App as colors } from './colors'
export { App as indeterminate } from './indeterminate'
export { App as label } from './label'
export { App as shapes } from './shapes'
export { App as sizes } from './sizes'
export { App as stripes } from './stripes'
export { App as variants } from './variants'
