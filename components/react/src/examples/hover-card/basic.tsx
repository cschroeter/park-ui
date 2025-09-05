import { HoverCard } from '@/components/ui'

export const App = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>Hover me</HoverCard.Trigger>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          This is a hover card content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  )
}
