import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { RatingGroup } from '@/components/ui'

export const App = () => {
  const colors = ['blue', 'green', 'amber', 'red'] as const
  return (
    <Stack gap="4">
      <For each={colors}>
        {(color) => (
          <RatingGroup.Root count={5} defaultValue={3} colorPalette={color}>
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        )}
      </For>
    </Stack>
  )
}
