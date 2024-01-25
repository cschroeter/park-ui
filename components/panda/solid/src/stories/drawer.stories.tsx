import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui/button'
import * as Drawer from '~/components/ui/drawer'
import { IconButton } from '~/components/ui/icon-button'

const meta: Meta = {
  title: 'Components/Drawer',
}

export default meta

export const Base = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Description>Description</Drawer.Description>
            <Drawer.CloseTrigger asChild position="absolute" top="3" right="4">
              <IconButton variant="ghost">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{/* Content */}</Drawer.Body>
          <Drawer.Footer gap="3">
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.CloseTrigger>
            <Button>Primary</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
