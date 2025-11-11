import { Portal } from 'solid-js/web'
import { Button, CloseButton, Dialog } from '@/components/ui'

export const App = () => {
  return (
    <Dialog.Root role="alertdialog">
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
              <Dialog.Title>Are you sure?</Dialog.Title>
              <Dialog.Description>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our systems.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Dialog.ActionTrigger
                asChild={(triggerProps) => (
                  <Button colorPalette="gray" variant="outline" {...triggerProps()}>
                    Cancel
                  </Button>
                )}
              />
              <Dialog.ActionTrigger
                asChild={(triggerProps) => (
                  <Button colorPalette="red" {...triggerProps()}>
                    Delete
                  </Button>
                )}
              />
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
