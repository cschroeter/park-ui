import { Stack } from 'styled-system/jsx'
import { Alert } from '@/components/ui'

export const App = () => {
  const statuses = ['neutral', 'info', 'warning', 'error', 'success'] as const

  return (
    <Stack gap="4">
      {statuses.map((status) => (
        <Alert.Root key={status} status={status}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>This is a title</Alert.Title>
            <Alert.Description>This is a description</Alert.Description>
          </Alert.Content>
        </Alert.Root>
      ))}
    </Stack>
  )
}
