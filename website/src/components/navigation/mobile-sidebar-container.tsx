import { Portal } from '@ark-ui/react'
import { MenuIcon, XIcon } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { Logo } from '../logo'
import { Drawer } from '../ui/drawer'
import { IconButton } from '../ui/icon-button'

export const MobileSidebarContainer = (props: PropsWithChildren) => (
  <Drawer.Root placement="left">
    <Drawer.Trigger asChild>
      <IconButton aria-label="Open Menu" variant="ghost" size="sm">
        <MenuIcon />
      </IconButton>
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Container>
        <Drawer.Content>
          <Drawer.Header pt="5">
            <a href="/" aria-label="Go to start page">
              <Logo />
            </a>
            <Drawer.CloseTrigger position="absolute" asChild>
              <IconButton aria-label="Close Sidebar" variant="ghost" top="3" right="4">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{props.children}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Container>
    </Portal>
  </Drawer.Root>
)
