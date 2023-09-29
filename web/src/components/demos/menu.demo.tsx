import { Portal } from '@ark-ui/react'
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
import { HStack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  type MenuProps,
} from '~/components/ui/menu'
import { Text } from '~/components/ui/text'

export const Demo = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuTrigger asChild>
        <Button variant="outline" size={props.size}>
          Open menu
        </Button>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent>
            <MenuItemGroup id="group-1">
              <MenuItemGroupLabel htmlFor="group-1">My Account</MenuItemGroupLabel>
              <MenuSeparator />
              <MenuItem id="profile">
                <HStack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">
                    <UserIcon />
                    Profile
                  </HStack>
                  <Text as="span" color="fg.subtle" textStyle="xs">
                    ⇧⌘P
                  </Text>
                </HStack>
              </MenuItem>
              <MenuItem id="billing">
                <HStack gap="2">
                  <CreditCardIcon /> Billing
                </HStack>
              </MenuItem>
              <MenuItem id="settings">
                <HStack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">
                    <SettingsIcon /> Settings
                  </HStack>
                  <Text as="span" color="fg.subtle" textStyle="xs">
                    ⌘,
                  </Text>
                </HStack>
              </MenuItem>
              <Menu positioning={{ placement: 'right-start', gutter: -2 }} {...props}>
                <MenuTriggerItem justifyContent="space-between">
                  <HStack gap="2">
                    <UserPlusIcon />
                    Inivte member
                  </HStack>
                  <ChevronRightIcon />
                </MenuTriggerItem>
                <Portal>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem id="email">
                        <HStack gap="2">
                          <MailIcon /> Email
                        </HStack>
                      </MenuItem>
                      <MenuItem id="message">
                        <HStack gap="2">
                          <MessageSquareIcon /> Message
                        </HStack>
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem id="other">
                        <HStack gap="2">
                          <PlusCircleIcon />
                          More Options...
                        </HStack>
                      </MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </Portal>
              </Menu>
              <MenuSeparator />
              <MenuItem id="logout">
                <HStack gap="2">
                  <LogOutIcon />
                  Logout
                </HStack>
              </MenuItem>
            </MenuItemGroup>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  )
}
