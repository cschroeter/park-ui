import { Portal } from 'solid-js/web'
import { Button, CloseButton, Dialog } from '@/components/ui'

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
            <Dialog.Header>
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>Description</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>{/* Content */}</Dialog.Body>
            <Dialog.Footer>
              <Dialog.Root size="sm">
                <Dialog.Trigger
                  asChild={(triggerProps) => <Button {...triggerProps()}>Open Dialog</Button>}
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
                      <Dialog.CloseTrigger
                        asChild={(triggerProps) => <CloseButton {...triggerProps()} />}
                      />
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
