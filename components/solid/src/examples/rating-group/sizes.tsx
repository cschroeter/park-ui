import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { RatingGroup } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size) => (
          <RatingGroup.Root count={5} defaultValue={3} size={size}>
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        )}
      </For>
    </Stack>
  )
}
