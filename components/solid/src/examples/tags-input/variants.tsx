import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { TagsInput } from '@/components/ui'

export const App = () => {
  const variants = ['outline', 'subtle', 'surface'] as const
  return (
    <Stack gap="4">
      <For each={variants}>
        {(variant) => (
          <TagsInput.Root variant={variant} defaultValue={['React', 'Solid', 'Vue']}>
            <TagsInput.Label>Tags</TagsInput.Label>
            <TagsInput.Control>
              <TagsInput.Items />
              <TagsInput.Input placeholder="Add tag..." />
            </TagsInput.Control>
          </TagsInput.Root>
        )}
      </For>
    </Stack>
  )
}
