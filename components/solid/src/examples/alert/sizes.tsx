import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Alert } from '@/components/ui'

export const App = () => {
  const sizes = ['md', 'lg'] as const

  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size) => (
          <Alert.Root size={size}>
            <Alert.Indicator />
            <Alert.Content>
              <Alert.Title>This is a title</Alert.Title>
              <Alert.Description>This is a description</Alert.Description>
            </Alert.Content>
          </Alert.Root>
        )}
      </For>
    </Stack>
  )
}
