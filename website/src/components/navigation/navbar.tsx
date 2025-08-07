import { SiGithub } from '@icons-pack/react-simple-icons'
import { Box, HStack } from '@park-ui/styled-system/jsx'
import Link from 'next/link'
import { Logo } from '../logo'
import { PageLink } from './page-link'

export const Navbar = () => {
  return (
    <Box
      borderBottomWidth="1px"
      position="fixed"
      insetX="0"
      top="0"
      zIndex="sticky"
      h="16"
      bg="bg.default"
    >
      <HStack h="full" px={{ base: '4', sm: '6', md: '8' }} justify="space-between">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <HStack gap="6" textStyle="sm">
          <PageLink href="/docs">Docs</PageLink>
          <PageLink href="/blog">Blog</PageLink>
          <PageLink href="/plus">Plus</PageLink>
          <Link href="https://github.com/cschroeter/park-ui" target="_blank" rel="noreferrer">
            <SiGithub />
          </Link>
        </HStack>
      </HStack>
    </Box>
  )
}
