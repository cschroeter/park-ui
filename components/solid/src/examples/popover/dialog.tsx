import { Portal } from 'solid-js/web'
import { Button, CloseButton, Dialog, Popover } from '@/components/ui'

export const App = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" {...triggerProps()}>
            Open Dialog
          </Button>
        )}
      />
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
            <Dialog.Header>
              <Dialog.Title>Popover in Dialog</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              This popover is inside a dialog. Click the button below to open the
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger
                asChild={(triggerProps) => (
                  <Button variant="outline" {...triggerProps()}>
                    Close
                  </Button>
                )}
              />
              <Popover.Root>
                <Popover.Trigger
                  asChild={(triggerProps) => <Button {...triggerProps()}>Open Popover</Button>}
                />
                <Popover.Positioner>
                  <Popover.Content>
                    <Popover.Arrow />
                    <Popover.Body>
                      <Popover.Title>Title</Popover.Title>
                      <Popover.Description>Description</Popover.Description>
                    </Popover.Body>
                    <Popover.CloseTrigger
                      asChild={(triggerProps) => <CloseButton {...triggerProps()} />}
                    />
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
