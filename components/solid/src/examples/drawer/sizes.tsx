import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Wrap } from 'styled-system/jsx'
import { Button, CloseButton, Drawer } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'] as const
  return (
    <Wrap gap="4">
      <For each={sizes}>
        {(size) => (
          <Drawer.Root size={size}>
            <Drawer.Trigger
              asChild={(triggerProps) => (
                <Button variant="outline" {...triggerProps()}>
                  Open ({size})
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
                  <Drawer.Footer>
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
