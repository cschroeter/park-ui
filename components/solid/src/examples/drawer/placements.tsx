import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Wrap } from 'styled-system/jsx'
import { Button, CloseButton, Drawer } from '@/components/ui'

export const App = () => {
  const placements = ['bottom', 'top', 'start', 'end'] as const
  return (
    <Wrap gap="4">
      <For each={placements}>
        {(placement) => (
          <Drawer.Root placement={placement}>
            <Drawer.Trigger
              asChild={(triggerProps) => (
                <Button variant="outline" {...triggerProps()}>
                  Open ({placement})
                </Button>
              )}
            />
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.CloseTrigger
                    asChild={(triggerProps) => <CloseButton {...triggerProps()} />}
                  />
                  <Drawer.Header>
                    <Drawer.Title>Title</Drawer.Title>
                    <Drawer.Description>Description</Drawer.Description>
                  </Drawer.Header>
                  <Drawer.Body>{/* Content */}</Drawer.Body>
                  <Drawer.Footer gap="3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save</Button>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        )}
      </For>
    </Wrap>
  )
}
