import { createVirtualizer } from '@tanstack/solid-virtual'
import { createEffect, createSignal, For } from 'solid-js'
import { Box, Center } from 'styled-system/jsx'
import { ScrollArea } from '@/components/ui'

export const App = () => {
  let scrollRef: HTMLDivElement | undefined
  const [items, setItems] = createSignal(Array.from({ length: 20 }, (_, i) => `Item #${i + 1}`))
  const [isLoading, setIsLoading] = createSignal(false)

  const hasMore = () => items().length < 200

  const rowVirtualizer = createVirtualizer({
    get count() {
      return hasMore() ? items().length + 1 : items().length
    },
    getScrollElement: () => scrollRef as HTMLDivElement,
    estimateSize: () => 40,
    overscan: 5,
    gap: 8,
  })

  createEffect(() => {
    const virtualItems = rowVirtualizer.getVirtualItems()
    const lastItem = virtualItems[virtualItems.length - 1]
    if (!lastItem || !hasMore() || isLoading()) return

    if (lastItem.index >= items().length - 1) {
      setIsLoading(true)
      setTimeout(() => {
        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 20 }, (_, i) => `Item #${prev.length + i + 1}`),
        ])
        setIsLoading(false)
      }, 750)
    }
  })

  return (
    <ScrollArea.Root height="72">
      <ScrollArea.Viewport ref={scrollRef}>
        <ScrollArea.Content>
          <Box
            position="relative"
            width="full"
            style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
          >
            <For each={rowVirtualizer.getVirtualItems()}>
              {(virtualItem) => {
                const isLoaderRow = virtualItem.index > items().length - 1
                const item = items()[virtualItem.index]

                return (
                  <Center
                    bg="gray.subtle.bg"
                    position="absolute"
                    inset="0"
                    style={{
                      height: `${virtualItem.size}px`,
                      transform: `translateY(${virtualItem.start}px)`,
                    }}
                  >
                    {isLoaderRow ? (hasMore() ? 'Loading more...' : 'Nothing more to load') : item}
                  </Center>
                )
              }}
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
