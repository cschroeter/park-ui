import type { Meta } from 'storybook-solidjs-vite'
import { Toaster } from '@/components/ui'

const meta: Meta = {
  title: 'Feedback / Toast',
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
}

export default meta

export { App as action } from './action'
export { App as basic } from './basic'
export { App as closable } from './closable'
export { App as duration } from './duration'
export { App as externalClose } from './external-close'
export { App as promise } from './promise'
export { App as types } from './types'
