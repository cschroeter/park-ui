import { createVirtualizer } from '@tanstack/solid-virtual'
import { For } from 'solid-js'
import { Box, Center } from 'styled-system/jsx'
import { ScrollArea } from '@/components/ui'

export const App = () => {
  let scrollRef: HTMLDivElement | undefined

  const rowVirtualizer = createVirtualizer({
    get count() {
      return 200
    },
    getScrollElement: () => scrollRef as HTMLDivElement,
    estimateSize: () => 40,
    gap: 8,
  })

  return (
    <ScrollArea.Root height="72">
      <ScrollArea.Viewport ref={scrollRef}>
        <ScrollArea.Content>
          <Box
            position="relative"
            width="full"
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
            }}
          >
            <For each={rowVirtualizer.getVirtualItems()}>
              {(virtualItem) => (
                <Center
                  bg="gray.subtle.bg"
                  position="absolute"
                  inset="0"
                  style={{
                    height: `${virtualItem.size}px`,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  Item #{virtualItem.index}
                </Center>
              )}
            </For>
          </Box>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
