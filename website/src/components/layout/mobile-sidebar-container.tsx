'use client'

import { Portal } from '@ark-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, type PropsWithChildren } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Stack } from 'styled-system/jsx'
import {
  Drawer,
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContainer,
  DrawerContent,
  DrawerTrigger,
} from '../drawer'
import { IconButton } from '../icon-button'
import { Logo } from '../icons/logo'

export const MobileSidebarContainer = (props: PropsWithChildren) => {
  return (
    <Drawer>
      {({ close }) => (
        <>
          <DrawerTrigger asChild>
            <IconButton icon={<FiMenu />} aria-label="Open Menu" variant="tertiary" size="sm" />
          </DrawerTrigger>
          <RouteChangeHandler close={close} />
          <Portal>
            <DrawerBackdrop />
            <DrawerContainer placement="left">
              <DrawerContent>
                <Stack gap="8" mt="-0.5" align="start">
                  <NextLink href="/">
                    <Logo />
                  </NextLink>
                  {props.children}
                </Stack>
                <DrawerCloseTrigger position="absolute" top="3" right="4" asChild>
                  <IconButton icon={<FiX />} aria-label="Close Sidebar" variant="tertiary" />
                </DrawerCloseTrigger>
              </DrawerContent>
            </DrawerContainer>
          </Portal>
        </>
      )}
    </Drawer>
  )
}

type Props = {
  close: () => void
}

const RouteChangeHandler = (props: Props) => {
  const { close } = props
  const pathname = usePathname()
  useEffect(() => {
    close()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  return null
}
