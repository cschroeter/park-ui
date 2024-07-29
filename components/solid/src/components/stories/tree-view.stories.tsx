import type { Meta } from 'storybook-solidjs'
import { TreeView, type TreeViewData } from '~/components/ui/tree-view'

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
      value: '1',
      name: 'Item 1',
      children: [
        {
          value: '1.1',
          name: 'Item 1.1',
        },
        {
          value: '1.2',
          name: 'Item 1.2',
          children: [
            {
              value: '1.2.1',
              name: 'Item 1.2.1',
            },
            {
              value: '1.2.2',
              name: 'Item 1.2.2',
            },
          ],
        },
      ],
    },
    {
      value: '2',
      name: 'Item 2',
      children: [
        {
          value: '2.1',
          name: 'Item 2.1',
        },
        {
          value: '2.2',
          name: 'Item 2.2',
        },
      ],
    },
    {
      value: '3',
      name: 'Item 3',
    },
  ],
}
