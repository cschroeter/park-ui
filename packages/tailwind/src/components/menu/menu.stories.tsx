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
import { Button } from '../button/snippet'
import { Text } from '../text/snippet'
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
} from './snippet'

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
                <div className="flex flex-row gap-6 justify-between flex-1">
                  <div className="flex flex-row gap-2">
                    <UserIcon />
                    Profile
                  </div>
                  <Text as="span" color="fg.subtle" textStyle="xs">
                    ⇧⌘P
                  </Text>
                </div>
              </MenuItem>
              <MenuItem id="billing">
                <div className="flex flex-row gap-2">
                  <CreditCardIcon /> Billing
                </div>
              </MenuItem>
              <MenuItem id="settings">
                <div className="flex flex-row gap-6 justify-between flex-1">
                  <div className="flex flex-row gap-2">
                    <SettingsIcon /> Settings
                  </div>
                  <Text as="span" color="fg.subtle" textStyle="xs">
                    ⌘,
                  </Text>
                </div>
              </MenuItem>
              <Menu positioning={{ placement: 'right-start', gutter: -2 }} {...props}>
                <MenuTriggerItem className="justify-between">
                  <div className="flex flex-row gap-2">
                    <UserPlusIcon />
                    Inivte member
                  </div>
                  <ChevronRightIcon />
                </MenuTriggerItem>
                <Portal>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem id="email">
                        <div className="flex flex-row gap-2">
                          <MailIcon /> Email
                        </div>
                      </MenuItem>
                      <MenuItem id="message">
                        <div className="flex flex-row gap-2">
                          <MessageSquareIcon /> Message
                        </div>
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem id="other">
                        <div className="flex flex-row gap-2">
                          <PlusCircleIcon />
                          More Options...
                        </div>
                      </MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </Portal>
              </Menu>
              <MenuSeparator />
              <MenuItem id="logout">
                <div className="flex flex-row gap-2">
                  <LogOutIcon />
                  Logout
                </div>
              </MenuItem>
            </MenuItemGroup>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  )
}
