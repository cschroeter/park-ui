import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Progress } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size) => (
          <Progress.Root size={size}>
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        )}
      </For>
    </Stack>
  )
}
