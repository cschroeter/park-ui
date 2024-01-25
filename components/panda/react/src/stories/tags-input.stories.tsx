import type { Meta } from '@storybook/react'
import { XIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import * as TagsInput from '~/components/ui/tags-input'

const meta: Meta = {
  title: 'Components/Tags Input',
}

export default meta

export const Base = () => {
  return (
    <TagsInput.Root defaultValue={['React', 'Solid', 'Vue']} maxW="xs">
      {(api) => (
        <>
          <TagsInput.Label>Frameworks</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton variant="link" size="xs">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
                <TagsInput.ItemInput />
              </TagsInput.Item>
            ))}
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
          <TagsInput.ClearTrigger asChild>
            <Button variant="outline">Clear</Button>
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}
