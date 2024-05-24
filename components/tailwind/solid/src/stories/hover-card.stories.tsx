import { MapPinIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Avatar, HoverCard, Icon, Link, Text } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Hover Card',
}

export default meta

export const Base = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger
        asChild={(props) => (
          <Link {...props()} href="https://twitter.com/grizzly_codes/" target="_blank" />
        )}
      >
        @grizzly_codes
      </HoverCard.Trigger>

      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <div class="flex gap-4 flex-row">
            <Avatar
              name="Christian Schröter"
              src="https://avatars.githubusercontent.com/u/1846056"
            />
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-1">
                <Text class="font-semibold" size="sm">
                  @grizzly_codes
                </Text>
                <Text class="text-fg-muted" size="sm">
                  Staff Software Engineer working at vivenu GmbH
                </Text>
              </div>
              <div class="flex gap-1 text-fg-subtle">
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
