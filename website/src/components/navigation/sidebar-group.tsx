import { useEffect, useState } from 'react'
import { Segment, SegmentControl, SegmentGroup, SegmentGroupIndicator, SegmentLabel } from '../ui'

interface Props {
  items: { href: string; title: string }[]
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
      {items.map((option, id) => (
        <a key={id} href={option.href} style={{ display: 'flex' }}>
          <Segment value={option.href} data-orientation="vertical">
            <SegmentControl />
            <SegmentLabel>{option.title}</SegmentLabel>
          </Segment>
        </a>
      ))}
      <SegmentGroupIndicator hidden={!items.some((entry) => entry.href === active)} />
    </SegmentGroup>
  )
}
