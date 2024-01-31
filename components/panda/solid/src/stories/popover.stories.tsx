import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Box, Stack } from 'styled-system/jsx'
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
          <Stack gap="1">
            <Popover.Title>Favorite Framework</Popover.Title>
            <Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </Popover.Description>
          </Stack>
          <Box position="absolute" top="1" right="1">
            <Popover.CloseTrigger as={IconButton} variant="ghost" size="sm">
              <XIcon />
            </Popover.CloseTrigger>
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
