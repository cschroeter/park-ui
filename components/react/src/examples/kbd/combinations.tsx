import { HStack } from 'styled-system/jsx'
import { Kbd } from '@/components/ui'

export const App = () => {
  return (
    <HStack gap="1">
      <Kbd>ctrl</Kbd>+<Kbd>shift</Kbd>+<Kbd>del</Kbd>
    </HStack>
  )
}
