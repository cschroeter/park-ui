import NextLink from 'next/link'
import { Flex, Grid, Stack } from 'styled-system/jsx'
import { Heading, Typography } from '~/components/ui/typography'
import { Astro } from './astro'
import { Gatsby } from './gatsby'
import { Nextjs } from './next-js'

export const QuickStart = () => {
  return (
    <Stack gap="6">
      <Stack gap={{ base: '3', md: '4' }}>
        <Heading textStyle={{ base: 'xl', md: '2xl' }}>Quickstart</Heading>
        <Typography color="fg.muted" lineHeight="relaxed">
          Running tight on schedule? No worries! Check out our quickstart examples to get started
          with Park UI in seconds.
        </Typography>
      </Stack>
      <Grid gap={{ base: '4', md: '6' }} columns={{ base: 3, sm: 4 }}>
        <NextLink
          href="https://stackblitz.com/github/cschroeter/park-ui/tree/main/examples/react/next-js"
          target="_blank"
        >
          <Flex
            borderRadius="lg"
            borderWidth="1px"
            p="4"
            bg="bg.default"
            align="center"
            justify="center"
          >
            <Stack gap="2.5">
              <Nextjs />
              <Typography textStyle="sm" textAlign="center">
                Next.js
              </Typography>
            </Stack>
          </Flex>
        </NextLink>

        <NextLink
          href="https://stackblitz.com/github/cschroeter/park-ui/tree/main/examples/react/astro"
          target="_blank"
        >
          <Flex
            borderRadius="lg"
            borderWidth="1px"
            p="4"
            bg="bg.default"
            align="center"
            justify="center"
          >
            <Stack gap="2.5">
              <Astro />
              <Typography textStyle="sm" textAlign="center">
                Astro
              </Typography>
            </Stack>
          </Flex>
        </NextLink>
        <NextLink
          href="https://stackblitz.com/github/cschroeter/park-ui/tree/main/examples/react/gatsby"
          target="_blank"
        >
          <Flex
            borderRadius="lg"
            borderWidth="1px"
            p="4"
            bg="bg.default"
            align="center"
            justify="center"
          >
            <Stack gap="2.5">
              <Gatsby />
              <Typography textStyle="sm" textAlign="center">
                Gatsby
              </Typography>
            </Stack>
          </Flex>
        </NextLink>
      </Grid>
    </Stack>
  )
}
