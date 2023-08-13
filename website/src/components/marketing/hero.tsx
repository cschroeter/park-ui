import NextLink from 'next/link'
import { TbBrandReact, TbBrandSolidjs, TbBrandVue } from 'react-icons/tb'
import { Button } from '~/components/ui/button'
import { Heading, Typography } from '~/components/ui/typography'
import { Box, Container, HStack, Stack } from '../../../styled-system/jsx'

export const Hero = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack gap={{ base: '8', md: '12' }}>
        <Stack gap={{ base: '4', md: '6' }} maxW={{ lg: 'xl' }}>
          <Heading as="h1" textStyle={{ base: '4xl', md: '6xl' }}>
            Build your own Design System.
          </Heading>
          <Typography textStyle={{ base: 'lg', md: 'xl' }} color="fg.muted">
            Beautifully designed components built with Ark UI and Panda CSS that work with a variety
            of JS frameworks.
          </Typography>
        </Stack>
        <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
          <Button size={{ base: 'xl', md: '2xl' }} asChild>
            <NextLink href="/docs/overview/introduction">Get Started</NextLink>
          </Button>
          <Button size={{ base: 'xl', md: '2xl' }} variant="secondary" asChild>
            <NextLink href="/docs/components/accordion">View Components</NextLink>
          </Button>
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
    </Container>
  )
}
