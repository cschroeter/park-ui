import { XIcon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import { TagsInput } from '~/components/ui/tags-input'

const meta: Meta = {
  title: 'Components/Tags Input',
}

export default meta

export const Base = () => {
  return (
    <TagsInput.Root value={['React', 'Solid', 'Vue']} maxW="xs">
      <TagsInput.Label>Frameworks</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Context>
          {(api) => (
            <Index each={api().value}>
              {(value, index) => (
                <TagsInput.Item index={index} value={value()}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger
                      asChild={(props) => <IconButton {...props()} variant="link" size="xs" />}
                    >
                      <XIcon />
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              )}
            </Index>
          )}
        </TagsInput.Context>
        <TagsInput.Input placeholder="Add Framework" />
      </TagsInput.Control>
      <TagsInput.ClearTrigger asChild={(props) => <Button {...props()} variant="outline" />}>
        Clear
      </TagsInput.ClearTrigger>
    </TagsInput.Root>
  )
}
