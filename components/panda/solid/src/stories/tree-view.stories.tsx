import type { Meta } from 'storybook-solidjs'
import { TreeView, type TreeViewData } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Tree View',
}

export default meta

export const Base = () => {
  return <TreeView data={data} maxW="2xs" />
}

const data: TreeViewData = {
  label: 'Root',
  children: [
    {
      id: '1',
      name: 'Item 1',
      children: [
        {
          id: '1.1',
          name: 'Item 1.1',
        },
        {
          id: '1.2',
          name: 'Item 1.2',
          children: [
            {
              id: '1.2.1',
              name: 'Item 1.2.1',
            },
            {
              id: '1.2.2',
              name: 'Item 1.2.2',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Item 2',
      children: [
        {
          id: '2.1',
          name: 'Item 2.1',
        },
        {
          id: '2.2',
          name: 'Item 2.2',
        },
      ],
    },
    {
      id: '3',
      name: 'Item 3',
    },
  ],
}
