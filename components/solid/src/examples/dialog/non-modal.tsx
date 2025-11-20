import { Portal } from 'solid-js/web'
import { Button, CloseButton, Dialog } from '@/components/ui'

export const App = () => {
  return (
    <Dialog.Root closeOnInteractOutside={false} modal={false}>
      <Dialog.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" {...triggerProps()}>
            Open Dialog
          </Button>
        )}
      />
      <Portal>
        <Dialog.Positioner pointerEvents="none">
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
