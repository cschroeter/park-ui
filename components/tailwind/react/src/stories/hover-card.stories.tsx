import type { Meta } from '@storybook/react'
import { MapPinIcon } from 'lucide-react'
import { HStack, Stack } from 'styled-system/jsx'
import { Avatar } from '~/components/ui/avatar'
import * as HoverCard from '~/components/ui/hover-card'
import { Icon } from '~/components/ui/icon'
import { Link } from '~/components/ui/link'
import { Text } from '~/components/ui/text'

const meta: Meta = {
  title: 'Components/Hover Card',
}

export default meta

export const Base = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Link
          href="https://twitter.com/grizzly_codes/"
          target="_blank"
          textStyle="sm"
          fontWeight="medium"
        >
          @grizzly_codes
        </Link>
      </HoverCard.Trigger>

      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <Stack gap="4" direction="row">
            <Avatar
              name="Christian Schröter"
              src="https://avatars.githubusercontent.com/u/1846056"
            />
            <Stack gap="3">
              <Stack gap="1">
                <Text textStyle="sm" fontWeight="semibold">
                  @grizzly_codes
                </Text>
                <Text textStyle="sm" color="fg.muted">
                  Staff Software Engineer working at vivenu GmbH
                </Text>
              </Stack>
              <HStack gap="1" color="fg.subtle" textStyle="xs">
                <Icon>
                  <MapPinIcon />
                </Icon>
                <Text>Joined Dezember 2011</Text>
              </HStack>
            </Stack>
          </Stack>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  )
}
