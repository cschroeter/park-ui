import { MapPinIcon } from 'lucide-solid'
import { Portal } from 'solid-js/web'
import { HStack, Stack } from 'styled-system/jsx'
import { Avatar, Button, CloseButton, Dialog, HoverCard, Icon, Link, Text } from '@/components/ui'

export const App = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" {...triggerProps()}>
            Open Dialog
          </Button>
        )}
      />
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
            <Dialog.Header>
              <Dialog.Title>Popover in Dialog</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <HoverCard.Root>
                <HoverCard.Trigger
                  asChild={(triggerProps) => (
                    <Link
                      href="https://twitter.com/grizzly_codes/"
                      target="_blank"
                      {...triggerProps()}
                    >
                      @grizzly_codes
                    </Link>
                  )}
                />
                <HoverCard.Positioner>
                  <HoverCard.Content>
                    <HoverCard.Arrow>
                      <HoverCard.ArrowTip />
                    </HoverCard.Arrow>
                    <Stack gap="4" direction="row">
                      <Avatar.Root size="lg">
                        <Avatar.Image src="https://avatars.githubusercontent.com/u/1846056?v=4" />
                        <Avatar.Fallback name="Christian Busch" />
                      </Avatar.Root>
                      <Stack gap="3">
                        <Stack gap="1">
                          <Text textStyle="sm" fontWeight="semibold">
                            @grizzly_codes
                          </Text>
                          <Text textStyle="sm" color="fg.muted">
                            Principal Software Engineer working at Pyck.ai
                          </Text>
                        </Stack>
                        <HStack gap="1" color="fg.subtle">
                          <Icon size="sm">
                            <MapPinIcon />
                          </Icon>
                          <Text textStyle="xs">Joined Oktober 2025</Text>
                        </HStack>
                      </Stack>
                    </Stack>
                  </HoverCard.Content>
                </HoverCard.Positioner>
              </HoverCard.Root>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger
                asChild={(triggerProps) => (
                  <Button variant="outline" {...triggerProps()}>
                    Close
                  </Button>
                )}
              />
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
