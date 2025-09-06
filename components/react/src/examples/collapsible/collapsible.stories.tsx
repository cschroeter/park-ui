import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Disclosure / Collapsible',
}

export default meta

export { App as basic } from './basic'
export { App as lazyMount } from './lazy-mount'
export { App as unmountOnExit } from './unmount-on-exit'
