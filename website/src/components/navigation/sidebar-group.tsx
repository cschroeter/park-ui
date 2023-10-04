import { useEffect, useState } from 'react'
import { HStack } from 'styled-system/jsx'
import { Segment, SegmentControl, SegmentGroup, SegmentGroupIndicator, SegmentLabel } from '../ui'
import { Badge } from '../ui/badge'

interface Props {
  items: { href: string; title: string; label?: string }[]
  activeItem?: string | null
}

export const SidebarGroup = (props: Props) => {
  const { items = [], activeItem } = props
  const [active, setActive] = useState<string>()

  useEffect(() => {
    if (activeItem) {
      setActive(activeItem)
      return
    }
    document.addEventListener('astro:after-swap', () => {
      setActive(window.location.pathname)
    })
    setActive(window.location.pathname)
  }, [activeItem])

  return (
    <SegmentGroup value={active} orientation="vertical" size={{ base: 'md', md: 'sm' }}>
      {items.map((item, id) => (
        <a key={id} href={item.href} style={{ display: 'flex', width: 'fit-content' }}>
          <Segment value={item.href} data-orientation="vertical">
            <SegmentControl />
            <SegmentLabel>
              <HStack gap="2">
                {item.title}
                {item.label && <Badge size="sm">{item.label}</Badge>}
              </HStack>
            </SegmentLabel>
          </Segment>
        </a>
      ))}
      <SegmentGroupIndicator hidden={!items.some((entry) => entry.href === active)} />
    </SegmentGroup>
  )
}
