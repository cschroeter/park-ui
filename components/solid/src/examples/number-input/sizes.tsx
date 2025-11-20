import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { NumberInput } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size) => (
          <NumberInput.Root size={size} defaultValue="42">
            <NumberInput.Control />
            <NumberInput.Input />
          </NumberInput.Root>
        )}
      </For>
    </Stack>
  )
}
