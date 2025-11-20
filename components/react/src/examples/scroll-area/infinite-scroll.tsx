'use client'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useEffect, useRef, useState } from 'react'
import { Box, Center } from 'styled-system/jsx'
import { ScrollArea } from '@/components/ui'

export const App = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [items, setItems] = useState(() => Array.from({ length: 20 }, (_, i) => `Item #${i + 1}`))
  const [isLoading, setIsLoading] = useState(false)

  const hasMore = items.length < 200

  const rowVirtualizer = useVirtualizer({
    count: hasMore ? items.length + 1 : items.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 40,
    overscan: 5,
    gap: 8,
  })

  const virtualItems = rowVirtualizer.getVirtualItems()

  useEffect(() => {
    const lastItem = virtualItems[virtualItems.length - 1]
    if (!lastItem || !hasMore || isLoading) return

    if (lastItem.index >= items.length - 1) {
      setIsLoading(true)
      setTimeout(() => {
        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 20 }, (_, i) => `Item #${prev.length + i + 1}`),
        ])
        setIsLoading(false)
      }, 750)
    }
  }, [virtualItems, hasMore, isLoading, items.length])

  return (
    <ScrollArea.Root height="72">
      <ScrollArea.Viewport ref={scrollRef}>
        <ScrollArea.Content>
          <Box
            position="relative"
            width="full"
            style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
          >
            {virtualItems.map((virtualItem) => {
              const isLoaderRow = virtualItem.index > items.length - 1
              const item = items[virtualItem.index]

              return (
                <Center
                  key={virtualItem.key}
                  bg="gray.subtle.bg"
                  position="absolute"
                  inset="0"
                  style={{
                    height: `${virtualItem.size}px`,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  {isLoaderRow ? (hasMore ? 'Loading more...' : 'Nothing more to load') : item}
                </Center>
              )
            })}
          </Box>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
