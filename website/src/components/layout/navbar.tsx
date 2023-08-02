'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Container, HStack, styled } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'
import { ColorModeButton } from '../color-mode-button'
import { Logo } from '../icons/logo'
import { FeedbackPopover } from '../marketing/feedback-popover'
import { MobileNavbar } from './mobile-navbar'
import { MobileSidebarContainer } from './mobile-sidebar-container'
import { Sidebar } from './sidebar'

export const Navbar = () => {
  const pathName = usePathname()

  return (
    <styled.nav role="navigation" position="sticky" top="0" zIndex="sticky" bg="bg.default">
      <Box borderBottomWidth="1px" position="relative">
        <Container py="4">
          <HStack justify="space-between" gap="8">
            <HStack gap="10">
              <NextLink href="/">
                <Logo />
              </NextLink>
              <HStack gap="8" display={{ base: 'none', md: 'flex' }}>
                <NextLink
                  href="/docs/overview/introduction"
                  aria-current={pathName.includes('/docs/overview/') ? 'page' : undefined}
                  className={link({ variant: 'navbar' })}
                >
                  Documentation
                </NextLink>
                <NextLink
                  href="/docs/components/accordion"
                  aria-current={pathName.includes('/docs/components/') ? 'page' : undefined}
                  className={link({ variant: 'navbar' })}
                >
                  Components
                </NextLink>
                <NextLink href="/#examples" className={link({ variant: 'navbar' })}>
                  Examples
                </NextLink>
              </HStack>
            </HStack>
            <HStack gap={{ base: '2', md: '6' }}>
              <FeedbackPopover
                closeOnInteractOutside={false}
                positioning={{ placement: 'bottom-end', gutter: 4 }}
              />
              <ColorModeButton />
            </HStack>
          </HStack>
        </Container>
      </Box>
      {pathName !== '/' && (
        <MobileNavbar>
          <MobileSidebarContainer>
            <Sidebar />
          </MobileSidebarContainer>
        </MobileNavbar>
      )}
    </styled.nav>
  )
}
