'use client'
import { Portal } from '@ark-ui/react/portal'
import { MapPinIcon } from 'lucide-react'
import { useState } from 'react'
import { HStack, Stack } from 'styled-system/jsx'
import { Avatar, HoverCard, Icon, Link, Text } from '@/components/ui'

export const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <HoverCard.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <HoverCard.Trigger asChild>
        <Link href="https://twitter.com/grizzly_codes/" target="_blank">
          @grizzly_codes
        </Link>
      </HoverCard.Trigger>
      <Portal>
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
                  <Text fontWeight="semibold">@grizzly_codes</Text>
                  <Text color="fg.muted">Principal Software Engineer working at Pyck.ai</Text>
                </Stack>
                <HStack gap="1" color="fg.subtle">
                  <Icon size="sm">
                    <MapPinIcon />
                  </Icon>
                  <Text size="xs">Joined Oktober 2025</Text>
                </HStack>
              </Stack>
            </Stack>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}
