import { SiNextdotjs, SiNuxtdotjs, SiSolid } from '@icons-pack/react-simple-icons'
import { Flex, Grid, Stack } from 'styled-system/jsx'
import { Text } from '~/components/ui'

export const Quickstart = () => {
  const frameworks = [
    { name: 'Next.js', icon: SiNextdotjs, slug: 'templates/react/next-js' },
    { name: 'Solid Start', icon: SiSolid, slug: 'templates/solid/solid-start' },
    { name: 'Nuxt', icon: SiNuxtdotjs, slug: 'templates/vue/nuxt' },
  ]
  return (
    <Grid gap={{ base: '4', md: '6' }} columns={{ base: 2, sm: 3, xl: 5 }} className="not-prose">
      {frameworks.map(({ name, icon: Icon, slug }) => (
        <a
          key={name}
          href={`https://stackblitz.com/github/chakra-ui/ark/tree/main/${slug}`}
          target="_blank"
          rel="noreferrer"
        >
          <Flex
            borderRadius="l3"
            borderWidth="1px"
            p="4"
            bg="bg.default"
            color="fg.default"
            align="center"
            justify="center"
          >
            <Stack gap="2.5">
              <Icon height="48" />
              <Text textStyle="sm" textAlign="center">
                {name}
              </Text>
            </Stack>
          </Flex>
        </a>
      ))}
    </Grid>
  )
}
