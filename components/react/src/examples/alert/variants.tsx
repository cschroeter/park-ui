import { Stack } from 'styled-system/jsx'
import { Alert } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'subtle', 'outline'] as const

  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <Alert.Root key={variant} variant={variant}>
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
