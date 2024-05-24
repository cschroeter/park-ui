import type { Meta } from '@storybook/react'
import { XIcon } from 'lucide-react'
import { Button, IconButton, TagsInput } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Tags Input',
}

export default meta

export const Base = () => {
  return (
    <TagsInput.Root className="max-w-xs" defaultValue={['React', 'Solid', 'Vue']}>
      <TagsInput.Label>Frameworks</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Context>
          {(api) =>
            api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemPreview>
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger asChild>
                    <IconButton variant="link" size="xs">
                      <XIcon />
                    </IconButton>
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.ItemPreview>
                <TagsInput.ItemInput />
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
        <TagsInput.Input placeholder="Add Framework" />
      </TagsInput.Control>
      <TagsInput.ClearTrigger asChild>
        <Button variant="outline">Clear</Button>
      </TagsInput.ClearTrigger>
    </TagsInput.Root>
  )
}
