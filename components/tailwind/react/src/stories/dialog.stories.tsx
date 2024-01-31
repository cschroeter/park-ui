import type { Meta } from '@storybook/react'
import { XIcon } from 'lucide-react'
import { Button, Dialog, IconButton } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Dialog',
}

export default meta

export const Base = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <div className="flex flex-col gap-8 p-6">
            <div className="flex flex-col gap-1">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
            </div>
            <div className="flex gap-3 flex-row w-full">
              <Dialog.CloseTrigger asChild>
                <Button className="w-full" variant="outline">
                  Cancel
                </Button>
              </Dialog.CloseTrigger>
              <Button className="w-full">Confirm</Button>
            </div>
          </div>
          <Dialog.CloseTrigger className="absolute top-2 right-2" asChild>
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
