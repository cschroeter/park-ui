import { Portal } from '@ark-ui/react'
import { XIcon } from 'lucide-react'
import { Button } from '../button/snippet'
import { IconButton } from '../icon-button/snippet'
import {
  Popover,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
  type PopoverProps,
} from './snippet'

export const Demo = (props: PopoverProps) => (
  <Popover portalled {...props}>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <Portal>
      <PopoverPositioner>
        <PopoverContent>
          <PopoverArrow>
            <PopoverArrowTip />
          </PopoverArrow>
          <div className="flex flex-col gap-1">
            <PopoverTitle>Favorite Framework</PopoverTitle>
            <PopoverDescription>
              Tell us what is your favorite framework and why you love to use it.
            </PopoverDescription>
          </div>
          <div className="absolute top-1 right-1">
            <PopoverCloseTrigger asChild>
              <IconButton aria-label="Close Popover" variant="ghost" size="sm">
                <XIcon />
              </IconButton>
            </PopoverCloseTrigger>
          </div>
        </PopoverContent>
      </PopoverPositioner>
    </Portal>
  </Popover>
)
