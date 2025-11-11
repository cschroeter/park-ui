import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Alert } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'subtle', 'outline'] as const

  return (
    <Stack gap="4">
      <For each={variants}>
        {(variant) => (
          <Alert.Root variant={variant}>
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
