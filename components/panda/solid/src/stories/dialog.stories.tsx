import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Stack } from 'styled-system/jsx'
import { Button, Dialog, IconButton } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Dialog',
}

export default meta

export const Base = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger as={Button}>Open Dialog</Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
            </Stack>
            <Stack gap="3" direction="row" width="full">
              <Dialog.CloseTrigger as={Button} variant="outline" width="full">
                Cancel
              </Dialog.CloseTrigger>
              <Button width="full">Confirm</Button>
            </Stack>
          </Stack>
          <Dialog.CloseTrigger
            as={IconButton}
            variant="ghost"
            size="sm"
            position="absolute"
            top="2"
            right="2"
          >
            <XIcon />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
