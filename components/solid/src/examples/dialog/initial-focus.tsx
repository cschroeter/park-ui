import { Portal } from 'solid-js/web'
import { Button, CloseButton, Dialog, Field, Input } from '@/components/ui'

export const App = () => {
  let ref: HTMLInputElement | undefined

  return (
    <Dialog.Root initialFocusEl={() => ref as HTMLInputElement}>
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
            <Dialog.Body gap="4">
              <Field.Root>
                <Field.Label>First Name</Field.Label>
                <Input placeholder="First Name" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Last Name</Field.Label>
                <Input ref={ref} placeholder="Last Name" />
              </Field.Root>
            </Dialog.Body>
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
