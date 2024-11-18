import { SiFigma, SiReact, SiVuedotjs } from '@icons-pack/react-simple-icons'
import { ArrowRightIcon } from 'lucide-react'
import NextLink from 'next/link'
import { Box, HStack, Stack } from 'styled-system/jsx'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Heading } from '~/components/ui/heading'
import { Text } from '~/components/ui/text'
import { ThemeDrawer } from '../theming/theme-drawer'
import { SolidIcon } from './icons'

export const Hero = () => {
  return (
    <Stack gap={{ base: '8', md: '12' }} maxW={{ md: '2xl' }}>
      <Stack gap={{ base: '4', md: '6' }}>
        <Stack gap="4">
          <NextLink href="/react/docs/overview/figma">
            <Badge size="lg" variant="outline">
              <SiFigma /> Checkout the new Park UI Figma Kit <ArrowRightIcon />
            </Badge>
          </NextLink>
          <Heading as="h1" textStyle={{ base: '4xl', md: '6xl' }} fontWeight="bold">
            Build your own Design System
          </Heading>
        </Stack>
        <Text textStyle={{ base: 'lg', md: 'xl' }} color="fg.muted">
          Beautifully designed components built with Ark UI and Panda CSS that work with a variety
          of JS frameworks.
        </Text>
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
        <Button asChild size={{ base: 'xl', md: '2xl' }}>
          <NextLink href="/react/docs/overview/introduction">
            Get Started <ArrowRightIcon />
          </NextLink>
        </Button>
        <ThemeDrawer isHero />
      </Stack>
      <HStack gap="6">
        {[
          { framework: 'React', icon: <SiReact /> },
          { framework: 'Vue', icon: <SiVuedotjs /> },
          { framework: 'Solid', icon: <SolidIcon /> },
          // { framework: 'Svelte', icon: <SiSvelte /> },
        ].map(({ framework, icon }) => (
          <HStack key={framework} gap="2">
            <Box fontSize="3xl">{icon}</Box>
            <Text as="span" color="fg.muted" hideBelow="sm">
              {framework}
            </Text>
          </HStack>
        ))}
      </HStack>
    </Stack>
  )
}
