import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui/button'
import { Drawer } from '~/components/ui/drawer'

const meta: Meta = {
  title: 'Components/Drawer',
}

export default meta

export const Base = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild={(props) => <Button {...props()} />}>Open Drawer</Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Description>Description</Drawer.Description>
            <Drawer.CloseTrigger position="absolute" top="3" right="4">
              <XIcon />
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{/* Content */}</Drawer.Body>
          <Drawer.Footer gap="3">
            <Drawer.CloseTrigger>Cancel</Drawer.CloseTrigger>
            <Button>Primary</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
