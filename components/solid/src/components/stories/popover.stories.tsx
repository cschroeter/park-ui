import { XIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Box, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import { Popover } from '~/components/ui/popover'

const meta: Meta = {
  title: 'Components/Popover',
}

export default meta

export const Base = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild={(props) => <Button {...props()} />}>Open Popover</Popover.Trigger>
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
            <Popover.CloseTrigger
              asChild={(props) => <IconButton {...props()} variant="ghost" size="sm" />}
            >
              <XIcon />
            </Popover.CloseTrigger>
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
