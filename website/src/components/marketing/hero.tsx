import { SiFigma, SiReact, SiSvelte, SiVuedotjs } from '@icons-pack/react-simple-icons'
import { ArrowRightIcon } from 'lucide-react'
import NextLink from 'next/link'
import { Box, HStack, Stack } from 'styled-system/jsx'
import { Badge, Heading, Text } from '@/components/ui'
import { ThemeDrawer } from '../docs/theme-drawer'
import { PageButton } from '../navigation/page-button'
import { HeroGroup, HeroItem } from './framer'

export const Hero = () => {
  return (
    <HeroGroup>
      <HeroItem>
        <Stack gap={{ base: '4', md: '6' }} align="flex-start">
          <NextLink href="/docs/overview/figma">
            <Badge size="lg" variant="surface">
              <SiFigma /> Checkout the new Park UI Figma Kit <ArrowRightIcon />
            </Badge>
          </NextLink>
          <Heading as="h1" textStyle={{ base: '4xl', md: '6xl' }} fontWeight="bold">
            Build your own Design System
          </Heading>
          <Text textStyle={{ base: 'lg', md: 'xl' }} color="fg.muted">
            Beautifully designed components built with Ark UI and Panda CSS that work with a variety
            of JS frameworks.
          </Text>
        </Stack>
      </HeroItem>
      <HeroItem>
        <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
          <PageButton href="/docs" size={{ base: 'xl', md: '2xl' }}>
            Get Started <ArrowRightIcon />
          </PageButton>
          <ThemeDrawer hero />
        </Stack>
      </HeroItem>
      <HeroItem>
        <HStack gap="6">
          {[
            { framework: 'React', icon: <SiReact /> },
            { framework: 'Vue', icon: <SiVuedotjs /> },
            { framework: 'Svelte', icon: <SiSvelte /> },
          ].map(({ framework, icon }) => (
            <HStack key={framework} gap="2">
              <Box fontSize="3xl">{icon}</Box>
              <Text as="span" color="fg.muted" hideBelow="sm">
                {framework}
              </Text>
            </HStack>
          ))}
        </HStack>
      </HeroItem>
    </HeroGroup>
  )
}
