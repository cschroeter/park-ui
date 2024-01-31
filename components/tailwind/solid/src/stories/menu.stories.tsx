import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
} from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Button, Menu, Text } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Menu',
}

export default meta

export const Base = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">Open Menu</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup id="group-1">
            <Menu.ItemGroupLabel for="group-1">My Account</Menu.ItemGroupLabel>
            <Menu.Separator />
            <Menu.Item id="profile">
              <div className="flex gap-6 flex-1" justify="space-between">
                <div className="flex gap-2">
                  <UserIcon />
                  Profile
                </div>
                <Text className="text-fg-subtle" as="span" textStyle="xs">
                  ⇧⌘P
                </Text>
              </div>
            </Menu.Item>
            <Menu.Item id="billing">
              <div className="flex gap-2">
                <CreditCardIcon /> Billing
              </div>
            </Menu.Item>
            <Menu.Item id="settings">
              <div className="flex gap-6 flex-1" justify="space-between">
                <div className="flex gap-2">
                  <SettingsIcon /> Settings
                </div>
                <Text className="text-fg-subtle" as="span" textStyle="xs">
                  ⌘,
                </Text>
              </div>
            </Menu.Item>
            <Menu.Root positioning={{ placement: 'right-start', gutter: -2 }}>
              <Menu.TriggerItem className="justify-between">
                <div className="flex gap-2">
                  <UserPlusIcon />
                  Invite member
                </div>
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item id="email">
                    <div className="flex gap-2">
                      <MailIcon /> Email
                    </div>
                  </Menu.Item>
                  <Menu.Item id="message">
                    <div className="flex gap-2">
                      <MessageSquareIcon /> Message
                    </div>
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item id="other">
                    <div className="flex gap-2">
                      <PlusCircleIcon />
                      More Options...
                    </div>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Separator />
            <Menu.Item id="logout">
              <div className="flex gap-2">
                <LogOutIcon />
                Logout
              </div>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
