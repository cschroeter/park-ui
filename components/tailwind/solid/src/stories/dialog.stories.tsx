import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
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
          <div class="flex flex-col gap-8 p-6">
            <div class="flex flex-col gap-1">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
            </div>
            <div class="flex gap-3 flex-row w-full">
              <Dialog.CloseTrigger class="w-full" as={Button} variant="outline">
                Cancel
              </Dialog.CloseTrigger>
              <Button class="w-full">Confirm</Button>
            </div>
          </div>
          <Dialog.CloseTrigger
            class="absolute top-2 right-2"
            as={IconButton}
            variant="ghost"
            size="sm"
          >
            <XIcon />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
