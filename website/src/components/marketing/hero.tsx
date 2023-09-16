'use client'
import { SiReact, SiSolid, SiVuedotjs } from '@icons-pack/react-simple-icons'
import NextLink from 'next/link'
import { Box, Container, Flex, HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Heading, Typography } from '../ui/typography'
import { ThemeDialog } from './theme-dialog'
import { ThemeGenerator } from './theme-generator'

export const Hero = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack direction="row" gap="8" align="center">
        <Stack gap={{ base: '8', md: '12' }} maxW={{ lg: 'xl' }} flexShrink={0} width="full">
          <Stack gap={{ base: '4', md: '6' }}>
            <Heading as="h1" textStyle={{ base: '4xl', md: '6xl' }}>
              Build your own Design System.
            </Heading>
            <Typography textStyle={{ base: 'lg', md: 'xl' }} color="fg.muted">
              Beautifully designed components built with Ark UI and Panda CSS that work with a
              variety of JS frameworks.
            </Typography>
          </Stack>
          <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
            <Button size={{ base: 'xl', md: '2xl' }} asChild>
              <NextLink href="/docs/overview/introduction">Get Started</NextLink>
            </Button>
            <Button
              size={{ base: 'xl', md: '2xl' }}
              variant="secondary"
              display={{ base: 'none', lg: 'inline-flex' }}
              asChild
            >
              <NextLink href="/docs/components/accordion">View Components</NextLink>
            </Button>
            <ThemeDialog />
          </Stack>
          <HStack gap={{ base: '10', md: '12' }}>
            {[
              { framework: 'React', icon: <SiReact /> },
              { framework: 'Vue', icon: <SiVuedotjs /> },
              { framework: 'Solid', icon: <SiSolid /> },
            ].map(({ framework, icon }) => (
              <HStack key={framework} gap="2">
                <Box fontSize="3xl" color="fg.emphasized">
                  {icon}
                </Box>
                <Typography as="span" color="fg.muted">
                  {framework}
                </Typography>
              </HStack>
            ))}
          </HStack>
        </Stack>
        <Flex
          align="center"
          justify="center"
          display={{ base: 'none', lg: 'flex' }}
          flexShrink={1}
          width="full"
        >
          <ThemeGenerator />
        </Flex>
      </Stack>
    </Container>
  )
}
