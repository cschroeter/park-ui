import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Wrap } from 'styled-system/jsx'
import { Button, CloseButton, Dialog } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Wrap gap="4">
      <For each={sizes}>
        {(size) => (
          <Dialog.Root size={size}>
            <Dialog.Trigger
              asChild={(triggerProps) => (
                <Button variant="outline" {...triggerProps()}>
                  Open ({size})
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
                  <Dialog.CloseTrigger
                    asChild={(triggerProps) => <CloseButton {...triggerProps()} />}
                  />
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        )}
      </For>
    </Wrap>
  )
}
