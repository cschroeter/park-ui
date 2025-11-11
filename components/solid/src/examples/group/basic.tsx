import { Center } from 'styled-system/jsx'
import { Group } from '@/components/ui'

export const App = () => {
  return (
    <Group>
      <Center h="20" w="40" bg="gray.subtle.bg" borderRadius="l2">
        1
      </Center>
      <Center h="20" w="40" bg="gray.subtle.bg" borderRadius="l2">
        2
      </Center>
    </Group>
  )
}
