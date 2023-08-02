'use client'
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogTrigger,
  Portal,
} from '@ark-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, type PropsWithChildren } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Box, Stack } from 'styled-system/jsx'
import { drawer } from 'styled-system/recipes'
import { IconButton } from '../icon-button'
import { Logo } from '../icons/logo'

export const MobileSidebarContainer = (props: PropsWithChildren) => {
  return (
    <Dialog>
      {({ close }) => (
        <>
          <DialogTrigger asChild>
            <IconButton icon={<FiMenu />} aria-label="Open Menu" variant="tertiary" size="sm" />
          </DialogTrigger>
          <RouteChangeHandler close={close} />
          <Portal>
            <DialogBackdrop className={drawer()} />
            <DialogContainer className={drawer()}>
              <DialogContent>
                <Box position="absolute" top="3.5" right="3.5">
                  <DialogCloseTrigger asChild>
                    <IconButton icon={<FiX />} aria-label="Close Menu" variant="tertiary" />
                  </DialogCloseTrigger>
                </Box>
                <Stack gap="8" mt="-2px">
                  <NextLink href="/">
                    <Logo />
                  </NextLink>
                  {props.children}
                </Stack>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </>
      )}
    </Dialog>
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
