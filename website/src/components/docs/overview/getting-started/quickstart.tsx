import NextLink from 'next/link'
import { Flex, Grid, Stack } from 'styled-system/jsx'
import { Heading, Typography } from '~/components/ui/typography'
import { Astro } from './astro'
import { Gatsby } from './gatsby'
import { Nextjs } from './next-js'
import { Nuxt } from './nuxt'
import { Solid } from './solid'

const frameworks = [
  {
    name: 'Next.js',
    icon: Nextjs,
    link: 'https://stackblitz.com/github/cschroeter/park-ui/tree/main/examples/react/next-js',
  },
  {
    name: 'Astro',
    icon: Astro,
    link: 'https://stackblitz.com/github/cschroeter/park-ui/tree/main/examples/react/astro',
  },
  {
    name: 'Gatsby',
    icon: Gatsby,
    link: 'https://stackblitz.com/github/cschroeter/park-ui/tree/main/examples/react/gatsby',
  },
  {
    name: 'Solid',
    icon: Solid,
    link: 'https://stackblitz.com/github/cschroeter/park-ui/tree/main/examples/solid/vite',
  },
  {
    name: 'Nuxt',
    icon: Nuxt,
    link: 'https://stackblitz.com/github/cschroeter/park-ui/tree/main/examples/vue/nuxt',
  },
]

export const QuickStart = () => (
  <Stack gap="6">
    <Stack gap={{ base: '3', md: '4' }}>
      <Heading textStyle={{ base: 'xl', md: '2xl' }}>Quickstart</Heading>
      <Typography color="fg.muted" lineHeight="relaxed">
        Running tight on schedule? No worries! Check out our quickstart examples to get started with
        Park UI in seconds.
      </Typography>
    </Stack>
    <Grid gap={{ base: '4', md: '6' }} columns={{ base: 2, sm: 4 }}>
      {frameworks.map(({ name, icon: Icon, link }) => (
        <NextLink href={link} target="_blank" key={name}>
          <Flex
            borderRadius="l3"
            borderWidth="1px"
            p="4"
            bg="bg.default"
            align="center"
            justify="center"
          >
            <Stack gap="2.5">
              <Icon />
              <Typography textStyle="sm" textAlign="center">
                {name}
              </Typography>
            </Stack>
          </Flex>
        </NextLink>
      ))}
    </Grid>
  </Stack>
)
