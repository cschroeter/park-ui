import { Portal } from '@ark-ui/react/portal'
import { Button, CloseButton, Dialog } from '@/components/ui'

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
            <Dialog.Header>
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>Description</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>{/* Content */}</Dialog.Body>
            <Dialog.Footer>
              <Dialog.Root size="sm">
                <Dialog.Trigger asChild>
                  <Button>Open Dialog</Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.Title>Title</Dialog.Title>
                        <Dialog.Description>Description</Dialog.Description>
                      </Dialog.Header>
                      <Dialog.Body>{/* Content */}</Dialog.Body>
                      <Dialog.CloseTrigger asChild>
                        <CloseButton />
                      </Dialog.CloseTrigger>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
