'use client'
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual'
import { useCallback, useMemo, useRef } from 'react'
import { Box, Center } from 'styled-system/jsx'
import { ScrollArea } from '@/components/ui'

export const App = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `${i + 1}`,
      })),
    [],
  )

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 80,
    gap: 12,
    overscan: 5,
  })

  const contentProps = useMemo(
    () => ({
      style: {
        height: `${virtualizer.getTotalSize()}px`,
        width: 'full',
        position: 'relative',
      } as const,
    }),
    [virtualizer],
  )

  const getItemProps = useCallback(
    (item: VirtualItem) => ({
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${item.size}px`,
        transform: `translateY(${item.start}px)`,
      } as const,
    }),
    [],
  )

  return (
    <ScrollArea.Root height="72">
      <ScrollArea.Viewport ref={scrollRef}>
        <ScrollArea.Content {...contentProps}>
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const item = items[virtualItem.index]
            return (
              <Box key={virtualItem.key} {...getItemProps(virtualItem)}>
                <Center h="20" w="full" bg="gray.a3" borderRadius="l2">
                  {item.name}
                </Center>
              </Box>
            )
          })}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar bg="transparent">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
