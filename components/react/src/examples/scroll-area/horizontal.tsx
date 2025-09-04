import { Center, HStack } from 'styled-system/jsx'
import { ScrollArea } from '@/components/ui'

export const App = () => (
  <ScrollArea.Root variant="visible">
    <ScrollArea.Viewport>
      <ScrollArea.Content py="4">
        <HStack gap="3">
          {Array.from({ length: 12 }, (_, i) => (
            <Center key={i} h="20" w="40" bg="gray.a3" borderRadius="l2">
              {i + 1}
            </Center>
          ))}
        </HStack>
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="horizontal">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
)
