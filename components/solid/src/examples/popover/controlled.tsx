import { createSignal } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Button, CloseButton, Popover } from '@/components/ui'

export const App = () => {
  const [open, setOpen] = createSignal(false)
  return (
    <Popover.Root open={open()} onOpenChange={(e) => setOpen(e.open)}>
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
            <Popover.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
