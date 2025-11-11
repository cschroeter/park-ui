import type { Meta } from 'storybook-solidjs-vite'
import { Box } from 'styled-system/jsx'

const meta: Meta = {
  title: 'Display / Carousel',
  decorators: [
    (Story) => (
      <Box maxW="lg">
        <Story />
      </Box>
    ),
  ],
}

export default meta

export { App as autoPlay } from './auto-play'
export { App as basic } from './basic'
export { App as images } from './images'
export { App as multiple } from './multiple'
export { App as scrollTo } from './scroll-to'
export { App as vertical } from './vertical'
