import { Portal } from '@ark-ui/react'
import { MenuIcon, XIcon } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { Stack } from 'styled-system/jsx'
import { Logo } from '../logo'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerTrigger,
} from '../ui/drawer'
import { IconButton } from '../ui/icon-button'

export const MobileSidebarContainer = (props: PropsWithChildren) => (
  <Drawer placement="left">
    {() => (
      <>
        <DrawerTrigger asChild>
          <Button px="0" aria-label="Open Menu" variant="ghost" size="sm">
            <MenuIcon />
          </Button>
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerContainer>
            <DrawerContent>
              <Stack gap="8" mt="-1.5" align="start">
                <a href="/" aria-label="Go to start page">
                  <Logo />
                </a>
                {props.children}
              </Stack>
              <DrawerCloseTrigger position="absolute" top="3" right="4" asChild>
                <IconButton aria-label="Close Sidebar" variant="ghost">
                  <XIcon />
                </IconButton>
              </DrawerCloseTrigger>
            </DrawerContent>
          </DrawerContainer>
        </Portal>
      </>
    )}
  </Drawer>
)
