import { Portal } from '@ark-ui/react'
import { MapPinIcon } from 'lucide-react'
import { HStack, Stack, styled } from 'styled-system/jsx'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import {
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
  type HoverCardProps,
} from '~/components/ui/hover-card'
import { Icon } from '~/components/ui/icon'
import { Text } from '~/components/ui/text'

export const Demo = (props: HoverCardProps) => (
  <HoverCard {...props}>
    <HoverCardTrigger asChild>
      <styled.a
        href="https://twitter.com/grizzly_codes/"
        target="_blank"
        textStyle="sm"
        fontWeight="medium"
      >
        @grizzly_codes
      </styled.a>
    </HoverCardTrigger>
    <Portal>
      <HoverCardPositioner>
        <HoverCardContent>
          <HoverCardArrow>
            <HoverCardArrowTip />
          </HoverCardArrow>
          <Stack gap="4" direction="row">
            <Avatar>
              <AvatarFallback>CS</AvatarFallback>
              <AvatarImage src="https://avatars.githubusercontent.com/u/1846056" alt="avatar" />
            </Avatar>
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
        </HoverCardContent>
      </HoverCardPositioner>
    </Portal>
  </HoverCard>
)
