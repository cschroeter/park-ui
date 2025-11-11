import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Progress } from '@/components/ui'

export const App = () => {
  const shapes = ['rounded', 'full', 'square'] as const
  return (
    <Stack gap="4">
      <For each={shapes}>
        {(shape) => (
          <Progress.Root shape={shape} defaultValue={42}>
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        )}
      </For>
    </Stack>
  )
}
