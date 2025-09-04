import { Popover } from '@/components/ui'

export const App = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>Click Me</Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Title>Welcome!</Popover.Title>
          <Popover.Description>
            This is a popover component built with Ark UI and Park UI.
          </Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
