import { XIcon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Button, IconButton, TagsInput } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Tags Input',
}

export default meta

export const Base = () => {
  return (
    <TagsInput.Root value={['React', 'Solid', 'Vue']} maxW="xs">
      {/* @ts-expect-error TODO resolve issue with Panda styled */}
      {(api) => (
        <>
          <TagsInput.Label>Frameworks</TagsInput.Label>
          <TagsInput.Control>
            <Index each={api().value}>
              {(value, index) => (
                <TagsInput.Item index={index} value={value()}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger as={IconButton} variant="link" size="xs">
                      <XIcon />
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              )}
            </Index>
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
          <TagsInput.ClearTrigger as={Button} variant="outline">
            Clear
          </TagsInput.ClearTrigger>
        </>
      )}
    </TagsInput.Root>
  )
}
