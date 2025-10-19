import { Box, Grid, GridItem, Stack } from 'styled-system/jsx'
import { CardAuthentication } from '~/components/marketing/card-authentication'
import { CardECommerce } from '~/components/marketing/card-ecommerce'
import { CardIssue } from '~/components/marketing/card-issue'
import { CardNotification } from '~/components/marketing/card-notification'
import { CardPayment } from '~/components/marketing/card-payment'
import { CardPricing } from '~/components/marketing/card-pricing'
import { CardSharing } from '~/components/marketing/card-sharing'
import { CardTabs } from '~/components/marketing/card-tabs'
import { Group, Item } from '~/components/marketing/framer'
import { Hero } from '~/components/marketing/hero'
import { LegalFooter } from '~/components/navigation/legal-footer'

export default function Page() {
  return (
    <>
      <Grid
        gridTemplateColumns={{ base: '1fr', lg: 'minmax(34rem, 5fr) 6fr' }}
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
            width="1300px"
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
                  <CardPayment />
                </Item>
                <Item>
                  <CardECommerce />
                </Item>
                <Item>
                  <CardAuthentication />
                </Item>
              </Group>
              <Group>
                <Item>
                  <CardSharing />
                </Item>
                <Item>
                  <CardIssue />
                </Item>
                <Item>
                  <CardTabs />
                </Item>
              </Group>
            </Grid>
          </Box>
        </GridItem>
      </Grid>
      <LegalFooter hideFrom="lg" px="4" />
    </>
  )
}
