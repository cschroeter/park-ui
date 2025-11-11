import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Editable } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const
  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size) => (
          <Editable.Root defaultValue="Click to edit" size={size}>
            <Editable.Preview />
            <Editable.Input />
          </Editable.Root>
        )}
      </For>
    </Stack>
  )
}
