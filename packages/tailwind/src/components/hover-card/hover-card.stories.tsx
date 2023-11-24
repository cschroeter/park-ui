import { Portal } from '@ark-ui/react'
import { MapPinIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar/snippet'
import { Icon } from '../icon/snippet'
import { Text } from '../text/snippet'
import {
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
  type HoverCardProps,
} from './snippet'

export const Demo = (props: HoverCardProps) => (
  <HoverCard {...props}>
    <HoverCardTrigger asChild>
      <a href="https://twitter.com/simon_h7r" target="_blank" className="font-medium text-sm">
        @smn_h7r
      </a>
    </HoverCardTrigger>
    <Portal>
      <HoverCardPositioner>
        <HoverCardContent>
          <HoverCardArrow>
            <HoverCardArrowTip />
          </HoverCardArrow>
          <div className="flex flex-row gap-4">
            <Avatar>
              <AvatarFallback>SH</AvatarFallback>
              <AvatarImage src="https://avatars.githubusercontent.com/u/20296626" alt="avatar" />
            </Avatar>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <Text textStyle="sm" fontWeight="semibold">
                  @simon_h7r
                </Text>
                <Text textStyle="sm" color="fg.muted">
                  Frontend Engineer
                </Text>
              </div>
              <div className="flex gap-1">
                <Icon>
                  <MapPinIcon />
                </Icon>
                <Text>Joined Dezember 2011</Text>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCardPositioner>
    </Portal>
  </HoverCard>
)
