import type { Meta } from '@storybook/react'
import { TreeView } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Tree View',
}

export default meta

export const Base = () => {
  return <TreeView />
}
