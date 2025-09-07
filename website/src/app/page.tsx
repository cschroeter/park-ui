import { Box, Grid, GridItem, Stack } from 'styled-system/jsx'
import { CardAuthentication } from '~/components/marketing/card-authentication'
import { CardNotification } from '~/components/marketing/card-notification'
import { CardPricing } from '~/components/marketing/card-pricing'
import { Group, Item } from '~/components/marketing/framer'
import { Hero } from '~/components/marketing/hero'
import { LegalFooter } from '~/components/navigation/legal-footer'

export default function Page() {
  return (
    <>
      <Grid
        gridTemplateColumns={{ base: '1fr', lg: 'minmax(34rem, 1fr) 1fr' }}
        mt="14"
        overflow={{ lg: 'hidden' }}
      >
        <Stack
          px={{ base: '4', sm: '6', md: '8' }}
          py={{ base: '16', md: '24', lg: '0' }}
          width="full"
        >
          <Stack
            flex="1"
            justifyContent={{ base: 'start', lg: 'center' }}
            alignItems={{ base: 'start', lg: 'flex-end' }}
          >
            <Hero />
          </Stack>
          <LegalFooter hideBelow="lg" />
        </Stack>
        <GridItem
          overflow={{ base: 'auto', lg: 'visible' }}
          lgDown={{ ps: '4', pb: '12', pt: '1px' }}
        >
          <Box
            height={{ base: 'auto', lg: 'calc(100vh - 56px)' }}
            width="1324px"
            transform={{
              base: 'none',
              lg: 'rotate(4deg) translateX(60px) translateY(50px)',
            }}
          >
            <Grid columns={3} gap={{ base: '6', lg: '8' }}>
              <Group>
                <Item>
                  <CardAuthentication />
                </Item>
                <Item>
                  <CardNotification />
                </Item>
                <Item>
                  <CardPricing />
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
    </>
  )
}
