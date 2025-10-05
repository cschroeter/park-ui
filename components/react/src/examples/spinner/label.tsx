import { VStack } from 'styled-system/jsx'
import { Spinner, Text } from '@/components/ui'

export const App = () => {
  return (
    <VStack gap="1.5">
      <Spinner />
      <Text color="fg.muted">Loading Users ...</Text>
    </VStack>
  )
}
