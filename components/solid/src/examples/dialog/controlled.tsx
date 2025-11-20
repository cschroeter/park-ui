import { createSignal } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Button, CloseButton, Dialog } from '@/components/ui'

export const App = () => {
  const [open, setOpen] = createSignal(false)

  return (
    <Dialog.Root open={open()} onOpenChange={(e) => setOpen(e.open)}>
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
            <Dialog.Header>
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>Description</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>{/* Content */}</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger
                asChild={(triggerProps) => (
                  <Button variant="outline" {...triggerProps()}>
                    Cancel
                  </Button>
                )}
              />
              <Dialog.ActionTrigger
                asChild={(triggerProps) => <Button {...triggerProps()}>Save</Button>}
              />
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
