import { XIcon } from 'lucide-solid'
import { Box, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import { Popover } from '~/components/ui/popover'

export const Demo = (props: Popover.RootProps) => {
  return (
    <Popover.Root {...props}>
      <Popover.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Open Popover</Button>}
      />
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
              asChild={(closeProps) => (
                <IconButton aria-label="Close Popover" variant="ghost" size="sm" {...closeProps()}>
                  <XIcon />
                </IconButton>
              )}
            />
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
