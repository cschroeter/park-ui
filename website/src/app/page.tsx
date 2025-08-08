import { Box, Center, Container, Grid, GridItem, Stack } from '@park-ui/styled-system/jsx'
import { CardAuthentication } from '~/components/marketing/card-authentication'
import { Group, Item } from '~/components/marketing/framer'
import { Hero } from '~/components/marketing/hero'
import { LegalFooter } from '~/components/navigation/legal-footer'

export default function Page() {
  return (
    <Center flex="1" overflow={{ lg: 'hidden' }} mt="14">
      <Container>
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: 'minmax(512px, 1fr) 1fr' }}
          gap={{ base: '0', lg: '24' }}
        >
          <GridItem display="flex" flexDirection="column" py={{ base: '16', md: '24', lg: '0' }}>
            <Stack flex="1" justifyContent={{ base: 'start', lg: 'center' }}>
              <Hero />
            </Stack>
            <LegalFooter hideBelow="lg" />
          </GridItem>
          <GridItem
            overflow={{ base: 'auto', lg: 'visible' }}
            px={{ base: '1px', lg: '0' }}
            py={{ base: '1px', lg: '0' }}
          >
            <Box
              height={{ base: 'auto', lg: 'calc(100vh - 56px)' }}
              width="1324px"
              transform={{
                base: 'none',
                lg: 'rotate(5deg) translateX(60px) translateY(35px)',
              }}
            >
              <Grid columns={3} gap={{ base: '6', lg: '8' }}>
                <Group>
                  <Item>
                    <CardAuthentication />
                  </Item>
                  <Item>
                    <CardAuthentication />
                  </Item>
                  <Item>
                    <CardAuthentication />
                  </Item>
                </Group>
                <Group>
                  <Item>
                    <CardAuthentication />
                  </Item>
                  <Item>
                    <CardAuthentication />
                  </Item>
                  <Item>
                    <CardAuthentication />
                  </Item>
                </Group>
                <Group>
                  <Item>
                    <CardAuthentication />
                  </Item>
                  <Item>
                    <CardAuthentication />
                  </Item>
                  <Item>
                    <CardAuthentication />
                  </Item>
                </Group>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
        <LegalFooter hideFrom="lg" />
      </Container>
    </Center>
  )
}
