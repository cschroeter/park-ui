'use client'
import { AnchorProvider, ScrollProvider, TOCItem, type TOCItemType } from 'fumadocs-core/toc'
import { type ReactNode, useRef } from 'react'
import { css } from 'styled-system/css'
import { Stack } from 'styled-system/jsx'
import { Text } from '@/components/ui'

interface TocEntry {
  title: string
  url: string
  items: TocEntry[]
}

interface Props {
  toc: TocEntry[]
  children?: ReactNode
}

export const TableOfContents = (props: Props) => {
  const { toc } = props
  const viewRef = useRef<HTMLDivElement>(null)
  const items = convertToItems(toc)

  return (
    <Stack gap="3">
      <Text className={css({ textStyle: 'header' })}>On this page</Text>

      <AnchorProvider toc={items}>
        <Stack ref={viewRef} overflow="auto" minH="0" pos="relative" borderLeftWidth="1px" ps="4">
          <ScrollProvider containerRef={viewRef}>
            {items.map((item) => (
              <TOCItem
                key={item.url}
                href={item.url}
                data-depth={item.depth}
                className={css({
                  color: 'fg.muted',
                  textStyle: 'sm',
                  '&:is(:active, [data-active="true"])': {
                    color: 'fg.default',
                    fontWeight: 'medium',
                  },
                  '&[data-depth="1"]': { ps: '4' },
                  '&[data-depth="2"]': { ps: '8' },
                })}
              >
                {item.title}
              </TOCItem>
            ))}
          </ScrollProvider>
        </Stack>
      </AnchorProvider>
    </Stack>
  )
}

const convertToItems = (items: TocEntry[]): TOCItemType[] =>
  items.flatMap((item) => {
    const flattenItems = (entry: TocEntry, depth: number): TOCItemType[] => {
      const currentItem: TOCItemType = { title: entry.title, url: entry.url, depth }
      const nestedItems = entry.items.flatMap((nested) => flattenItems(nested, depth + 1))
      return [currentItem, ...nestedItems]
    }
    return flattenItems(item, 0)
  })
