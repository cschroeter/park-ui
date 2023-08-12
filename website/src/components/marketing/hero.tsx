'use client'
import NextLink from 'next/link'
import { TbBrandReact, TbBrandSolidjs, TbBrandVue } from 'react-icons/tb'
import { Box, Container, Flex, HStack, Stack } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { Heading, Typography } from '../ui/typography'
import { ThemeGenerator } from './theme-generator'

export const Hero = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack direction="row" gap="8" align="center">
        <Stack gap={{ base: '8', md: '12' }} maxW={{ lg: 'xl' }} flex="1" flexShrink={0}>
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
            <NextLink
              href="/docs/overview/introduction"
              className={button({ variant: 'primary', size: { base: 'xl', md: '2xl' } })}
            >
              Get Started
            </NextLink>
            <NextLink
              href="/docs/components/accordion"
              className={button({ variant: 'secondary', size: { base: 'xl', md: '2xl' } })}
            >
              View Components
            </NextLink>
          </Stack>
          <HStack gap={{ base: '10', md: '12' }}>
            {[
              { framework: 'React', icon: <TbBrandReact /> },
              { framework: 'Vue', icon: <TbBrandVue /> },
              { framework: 'Solid', icon: <TbBrandSolidjs /> },
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
        <Flex align="center" justify="center" flex="1">
          <ThemeGenerator />
        </Flex>
      </Stack>
    </Container>
  )
}
