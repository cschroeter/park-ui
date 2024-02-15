import type { Meta } from '@storybook/react'
import { TreeView, type TreeViewData } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Tree View',
}

export default meta

export const Base = () => {
  return <TreeView data={data} />
}

const data: TreeViewData = {
  label: 'Root',
  children: [
    {
      id: '1',
      name: 'Child 1',
      children: [
        {
          id: '1.1',
          name: 'Child 1.1',
        },
      ],
    },
    {
      id: '2',
      name: 'Child 2',
    },
  ],
}
