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
import { HStack } from 'styled-system/jsx'
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
              <HStack gap="6" justify="space-between" flex="1">
                <HStack gap="2">
                  <UserIcon />
                  Profile
                </HStack>
                <Text as="span" color="fg.subtle" textStyle="xs">
                  ⇧⌘P
                </Text>
              </HStack>
            </Menu.Item>
            <Menu.Item id="billing">
              <HStack gap="2">
                <CreditCardIcon /> Billing
              </HStack>
            </Menu.Item>
            <Menu.Item id="settings">
              <HStack gap="6" justify="space-between" flex="1">
                <HStack gap="2">
                  <SettingsIcon /> Settings
                </HStack>
                <Text as="span" color="fg.subtle" textStyle="xs">
                  ⌘,
                </Text>
              </HStack>
            </Menu.Item>
            <Menu.Root positioning={{ placement: 'right-start', gutter: -2 }}>
              <Menu.TriggerItem justifyContent="space-between">
                <HStack gap="2">
                  <UserPlusIcon />
                  Invite member
                </HStack>
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item id="email">
                    <HStack gap="2">
                      <MailIcon /> Email
                    </HStack>
                  </Menu.Item>
                  <Menu.Item id="message">
                    <HStack gap="2">
                      <MessageSquareIcon /> Message
                    </HStack>
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item id="other">
                    <HStack gap="2">
                      <PlusCircleIcon />
                      More Options...
                    </HStack>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Separator />
            <Menu.Item id="logout">
              <HStack gap="2">
                <LogOutIcon />
                Logout
              </HStack>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
