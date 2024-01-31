import type { Meta } from '@storybook/react'
import { MapPinIcon } from 'lucide-react'
import { Avatar, HoverCard, Icon, Link, Text } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Hover Card',
}

export default meta

export const Base = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Link href="https://twitter.com/grizzly_codes/" target="_blank">
          @grizzly_codes
        </Link>
      </HoverCard.Trigger>

      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <div className="flex gap-4 flex-row">
            <Avatar
              name="Christian Schröter"
              src="https://avatars.githubusercontent.com/u/1846056"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <Text className="font-semibold" size="sm">
                  @grizzly_codes
                </Text>
                <Text className="text-fg-muted" size="sm">
                  Staff Software Engineer working at vivenu GmbH
                </Text>
              </div>
              <div className="flex gap-1 text-fg-subtle">
                <Icon size="sm">
                  <MapPinIcon />
                </Icon>
                <Text size="xs">Joined Dezember 2011</Text>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  )
}
