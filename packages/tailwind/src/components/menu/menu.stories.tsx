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
} from 'lucide-react'
import { Button } from '../button/snippet'
import { Text } from '../text/snippet'
import { Menu, type MenuProps } from './snippet'

export const Demo = (props: MenuProps) => {
  return (
    <Menu.Root {...props}>
      <Menu.Trigger asChild>
        <Button variant="outline" size={props.size}>
          Open menu
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup id="group-1">
            <Menu.ItemGroupLabel htmlFor="group-1">My Account</Menu.ItemGroupLabel>
            <Menu.Separator />
            <Menu.Item id="profile">
              <div className="flex flex-row gap-6 justify-between flex-1">
                <div className="flex flex-row gap-2">
                  <UserIcon />
                  Profile
                </div>
                <Text as="span" color="fg.subtle" textStyle="xs">
                  ⇧⌘P
                </Text>
              </div>
            </Menu.Item>
            <Menu.Item id="billing">
              <div className="flex flex-row gap-2">
                <CreditCardIcon /> Billing
              </div>
            </Menu.Item>
            <Menu.Item id="settings">
              <div className="flex flex-row gap-6 justify-between flex-1">
                <div className="flex flex-row gap-2">
                  <SettingsIcon /> Settings
                </div>
                <Text as="span" color="fg.subtle" textStyle="xs">
                  ⌘,
                </Text>
              </div>
            </Menu.Item>
            <Menu.Root positioning={{ placement: 'right-start', gutter: -2 }} {...props}>
              <Menu.TriggerItem className="justify-between">
                <div className="flex flex-row gap-2">
                  <UserPlusIcon />
                  Inivte member
                </div>
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item id="email">
                    <div className="flex flex-row gap-2">
                      <MailIcon /> Email
                    </div>
                  </Menu.Item>
                  <Menu.Item id="message">
                    <div className="flex flex-row gap-2">
                      <MessageSquareIcon /> Message
                    </div>
                  </Menu.Item>
                  <Menu.Separator />
                  <Menu.Item id="other">
                    <div className="flex flex-row gap-2">
                      <PlusCircleIcon />
                      More Options...
                    </div>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Separator />
            <Menu.Item id="logout">
              <div className="flex flex-row gap-2">
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
