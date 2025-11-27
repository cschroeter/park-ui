import { ArrowRightIcon } from 'lucide-react'
import NextLink from 'next/link'
import { Box, HStack, Stack } from 'styled-system/jsx'
import { Badge, Heading, Text } from '@/components/ui'
import { ThemeDrawer } from '../docs/theme-drawer'
import { ReactIcon, SolidIcon } from '../icons'
import { PageButton } from '../navigation/page-button'
import { HeroGroup, HeroItem } from './framer'

export const Hero = () => {
  return (
    <HeroGroup>
      <HeroItem>
        <Stack gap={{ base: '4', md: '6' }} align="flex-start">
          <Stack gap="4">
            <NextLink href="https://legacy.park-ui.com">
              <Badge size="2xl" variant="subtle">
                Need the old version? Click here
                <ArrowRightIcon />
              </Badge>
            </NextLink>
            <Heading as="h1" textStyle={{ base: '4xl', md: '6xl' }} fontWeight="bold">
              Build your own Design System!!
            </Heading>
          </Stack>
          <Text textStyle={{ base: 'lg', md: 'xl' }} color="fg.muted" maxW="2xl">
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
            { framework: 'React', icon: <ReactIcon /> },
            { framework: 'Solid', icon: <SolidIcon /> },
            // { framework: 'Vue', icon: <VueIcon /> },
          ].map(({ framework, icon }) => (
            <HStack key={framework}>
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
