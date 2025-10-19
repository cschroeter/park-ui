import { Portal } from '@ark-ui/react/portal'
import { Button, CloseButton, Dialog, Popover } from '@/components/ui'

export const App = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              <CloseButton />
            </Dialog.CloseTrigger>
            <Dialog.Header>
              <Dialog.Title>Popover in Dialog</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              This popover is inside a dialog. Click the button below to open the
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Close</Button>
              </Dialog.ActionTrigger>
              <Popover.Root>
                <Popover.Trigger asChild>
                  <Button>Open Popover</Button>
                </Popover.Trigger>
                <Popover.Positioner>
                  <Popover.Content>
                    <Popover.Arrow />
                    <Popover.Body>
                      <Popover.Title>Title</Popover.Title>
                      <Popover.Description>Description</Popover.Description>
                    </Popover.Body>
                    <Popover.CloseTrigger asChild>
                      <CloseButton />
                    </Popover.CloseTrigger>
                  </Popover.Content>
                </Popover.Positioner>
              </Popover.Root>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
