import type { Meta } from '@storybook/react'
import { XIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import * as Popover from '~/components/ui/popover'

const meta: Meta = {
  title: 'Components/Popover',
}

export default meta

export const Base = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <div className="flex flex-col gap-1">
            <Popover.Title>Favorite Framework</Popover.Title>
            <Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </Popover.Description>
          </div>
          <div position="absolute" top="1" right="1">
            <Popover.CloseTrigger asChild>
              <IconButton aria-label="Close Popover" variant="ghost" size="sm">
                <XIcon />
              </IconButton>
            </Popover.CloseTrigger>
          </div>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
