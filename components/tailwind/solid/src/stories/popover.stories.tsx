import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Button, IconButton, Popover } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Popover',
}

export default meta

export const Base = () => {
  return (
    <Popover.Root>
      <Popover.Trigger as={Button}>Open Popover</Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <div class="flex flex-col gap-1">
            <Popover.Title>Favorite Framework</Popover.Title>
            <Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </Popover.Description>
          </div>
          <div class="absolute top-1 right-1">
            <Popover.CloseTrigger as={IconButton} variant="ghost" size="sm">
              <XIcon />
            </Popover.CloseTrigger>
          </div>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
