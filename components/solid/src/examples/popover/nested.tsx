import { Portal } from 'solid-js/web'
import { Button, CloseButton, Popover } from '@/components/ui'

export const App = () => {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" {...triggerProps()}>
            Open Popover
          </Button>
        )}
      />
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Title>Title</Popover.Title>
              <Popover.Description>Description</Popover.Description>
            </Popover.Body>
            <Popover.Footer>
              <Popover.Root>
                <Popover.Trigger
                  asChild={(triggerProps) => (
                    <Button variant="outline" size="sm" {...triggerProps()}>
                      Open Nested Popover
                    </Button>
                  )}
                />
                <Popover.Positioner>
                  <Popover.Content>
                    <Popover.Arrow />
                    <Popover.Body>
                      <Popover.Title>Title</Popover.Title>
                      <Popover.Description>Description</Popover.Description>
                    </Popover.Body>
                  </Popover.Content>
                </Popover.Positioner>
              </Popover.Root>
            </Popover.Footer>
            <Popover.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
