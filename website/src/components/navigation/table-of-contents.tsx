'use client'
import type { TOCItemType } from 'fumadocs-core/server'
import { AnchorProvider, ScrollProvider, TOCItem } from 'fumadocs-core/toc'
import { MenuIcon } from 'lucide-react'
import { type ReactNode, useRef } from 'react'
import { css } from 'styled-system/css'
import { HStack, Stack } from 'styled-system/jsx'
import { Icon, Text } from '@/components/ui'

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
    <Stack>
      <HStack gap="1">
        <Icon size="sm" color="fg.muted">
          <MenuIcon />
        </Icon>
        <Text textStyle="sm" color="fg.muted">
          On this page
        </Text>
      </HStack>

      <AnchorProvider toc={items}>
        <Stack ref={viewRef} overflow="auto" minH="0" pos="relative">
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
                    color: 'colorPalette.default',
                    fontWeight: 'medium',
                  },
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
