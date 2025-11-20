import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Textarea } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size, index) => (
          <Textarea placeholder={`size (${size})`} size={size} rows={index() + 1} />
        )}
      </For>
    </Stack>
  )
}
