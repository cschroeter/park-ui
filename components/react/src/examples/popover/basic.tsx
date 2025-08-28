import { XIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button, IconButton, Popover } from '@/components/ui'

export const App = () => {
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
          <Stack gap="1">
            <Popover.Title>Favorite Framework</Popover.Title>
            <Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </Popover.Description>
          </Stack>
          <Popover.CloseTrigger asChild>
            <IconButton variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </Popover.CloseTrigger>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
