import { XIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import { TagsInput } from '~/components/ui/tags-input'

export const Demo = (props: TagsInput.RootProps) => {
  return (
    <TagsInput.Root defaultValue={['React', 'Solid', 'Vue']} maxW="xs" {...props}>
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              <For each={api().value}>
                {(value, index) => (
                  <TagsInput.Item index={index()} value={value}>
                    <TagsInput.ItemPreview>
                      <TagsInput.ItemText>{value}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger
                        asChild={(triggerProps) => (
                          <IconButton variant="link" size="xs" {...triggerProps()}>
                            <XIcon />
                          </IconButton>
                        )}
                      />
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput />
                    <TagsInput.HiddenInput />
                  </TagsInput.Item>
                )}
              </For>
              <TagsInput.Input placeholder="Add Framework" />
            </TagsInput.Control>
            <TagsInput.ClearTrigger
              asChild={(triggerProps) => (
                <Button variant="outline" {...triggerProps()}>
                  Clear
                </Button>
              )}
            />
          </>
        )}
      </TagsInput.Context>
    </TagsInput.Root>
  )
}
