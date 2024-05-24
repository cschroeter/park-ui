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
      <Menu.Trigger asChild={() => <Button variant="outline" />}>Open Menu</Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>My Account</Menu.ItemGroupLabel>
            <Menu.Separator />
            <Menu.Item value="profile">
              <div class="flex gap-6 justify-between flex-1">
                <div class="flex gap-2">
                  <UserIcon />
                  Profile
                </div>
                <Text class="text-fg-subtle" as="span" size="sm">
                  ⇧⌘P
                </Text>
              </div>
            </Menu.Item>
            <Menu.Item value="billing">
              <div class="flex gap-2">
                <CreditCardIcon /> Billing
              </div>
            </Menu.Item>
            <Menu.Item value="settings">
              <div class="flex gap-6 justify-between flex-1">
                <div class="flex gap-2">
                  <SettingsIcon /> Settings
                </div>
                <Text class="text-fg-subtle" as="span" size="sm">
                  ⌘,
                </Text>
              </div>
            </Menu.Item>
            <Menu.Root positioning={{ placement: 'right-start', gutter: -2 }}>
              <Menu.TriggerItem class="justify-between">
                <div class="flex gap-2">
                  <UserPlusIcon />
                  Invite member
                </div>
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="email">
                    <div class="flex gap-2">
                      <MailIcon /> Email
                    </div>
                  </Menu.Item>
                  <Menu.Item value="message">
                    <div class="flex gap-2">
                      <MessageSquareIcon /> Message
                    </div>
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item value="other">
                    <div class="flex gap-2">
                      <PlusCircleIcon />
                      More Options...
                    </div>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Separator />
            <Menu.Item value="logout">
              <div class="flex gap-2">
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
