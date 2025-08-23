import Link from 'next/link'
import { Box, HStack } from 'styled-system/jsx'
import { ColorModeButton } from '../color-mode-button'
import { Logo } from '../logo'
import { GithubButton } from './github-button'
import { NavbarLink } from './navbar-link'

export const Navbar = () => {
  return (
    <Box
      borderBottomWidth="1px"
      position="fixed"
      insetX="0"
      top="0"
      zIndex="10"
      bg="bg.default"
      h="14"
    >
      <HStack h="full" px={{ base: '4', sm: '6', md: '8' }} justify="space-between">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <HStack gap="0" textStyle="sm" divideX="1px" borderXWidth="1px">
          <NavbarLink href="/docs">Docs</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/plus">Plus</NavbarLink>
          <GithubButton />
          <ColorModeButton />
        </HStack>
      </HStack>
    </Box>
  )
}
