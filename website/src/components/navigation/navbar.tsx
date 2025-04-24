import NextLink from 'next/link'
import { Divider, HStack, Stack } from 'styled-system/jsx'
import { Logo } from '~/components/logo'
import { ColorModeButton } from '~/components/navigation/color-mode-button'
import { FrameworkSelect } from '~/components/navigation/framework-select'
import { GitHubLink } from '~/components/navigation/github-link'
import { MobileNavbar } from '~/components/navigation/mobile-navbar'
import { MobileNavbarLinks } from '~/components/navigation/mobile-navbar-links'
import { NavbarContainer } from '~/components/navigation/navbar-container'
import { NavbarLinks } from '~/components/navigation/navbar-links'
import { getFramework } from '~/lib/framework'
import { UserButton } from '../auth/user-button'
import { ThemeDrawer } from '../theming/theme-drawer'

export const Navbar = async () => {
  const framework = await getFramework()

  return (
    <NavbarContainer>
      <HStack justify="space-between">
        <NextLink href="/" aria-label="Back to home">
          <Logo />
        </NextLink>
        <HStack gap="3" py="1" display={{ base: 'none', md: 'flex' }}>
          <NavbarLinks framework={framework} />
          <Divider orientation="vertical" h="6" />
          <FrameworkSelect framework={framework} />
          <Divider orientation="vertical" h="6" />
          <HStack gap="2">
            <HStack gap="0">
              <ThemeDrawer />
              <ColorModeButton />
              <GitHubLink />
            </HStack>
            <UserButton />
          </HStack>
        </HStack>
        <HStack gap="3" py="0.5" display={{ base: 'flex', md: 'none' }}>
          <MobileNavbar>
            <Stack gap="0" width="17rem">
              <MobileNavbarLinks />
              <FrameworkSelect framework={framework} />
              <Divider />
              <HStack gap="3" justifyContent="center" px="3" pt="6">
                <ColorModeButton />
                <GitHubLink />
                <UserButton />
              </HStack>
            </Stack>
          </MobileNavbar>
        </HStack>
      </HStack>
    </NavbarContainer>
  )
}
