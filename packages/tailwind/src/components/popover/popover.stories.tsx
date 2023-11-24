import { Portal } from '@ark-ui/react'
import { XIcon } from 'lucide-react'
import { Button } from '../button/snippet'
import { IconButton } from '../icon-button/snippet'
import { Popover, type PopoverProps } from './snippet'

export const Demo = (props: PopoverProps) => (
  <Popover.Root portalled {...props}>
    <Popover.Trigger asChild>
      <Button variant="outline">Open Popover</Button>
    </Popover.Trigger>
    <Portal>
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
          <div className="absolute top-1 right-1">
            <Popover.CloseTrigger asChild>
              <IconButton aria-label="Close Popover" variant="ghost" size="sm">
                <XIcon />
              </IconButton>
            </Popover.CloseTrigger>
          </div>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
)
