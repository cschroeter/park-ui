import { MoreVerticalIcon } from 'lucide-react'
import Link from 'next/link'
import { Box, HStack } from 'styled-system/jsx'
import { IconButton } from '@/components/ui'
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
        <HStack gap="0" divideX="1px" borderXWidth="1px" hideBelow="md">
          <NavbarLink href="/docs">Docs</NavbarLink>
          {/* <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/plus">Plus</NavbarLink> */}
          <GithubButton />
          <ColorModeButton />
        </HStack>
        <Box hideFrom="md">
          <IconButton variant="ghost" px="0" size="sm" aria-label="Open menu">
            <MoreVerticalIcon />
          </IconButton>
        </Box>
      </HStack>
    </Box>
  )
}
