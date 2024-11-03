import { Box, Center, Container, Grid, GridItem, Stack } from 'styled-system/jsx'
import { Hero } from '~/components/marketing/hero'
import { AuthenticationCard } from '~/components/marketing/showcase/authentication-card'
import { CardWithTabs } from '~/components/marketing/showcase/card-with-tabs'
import { ECommerceCard } from '~/components/marketing/showcase/e-commerce-card'
import { NotificationCard } from '~/components/marketing/showcase/notification-card'
import { PaymentCard } from '~/components/marketing/showcase/payment-card'
import { PricingCard } from '~/components/marketing/showcase/pricing-card'
import { ReportIssueCard } from '~/components/marketing/showcase/report-issue-card'
import { ShareDocumentCard } from '~/components/marketing/showcase/share-document-card'

export default function Home() {
  return (
    <Center flex="1" mt="16" overflow={{ lg: 'hidden' }}>
      <Container>
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: 'minmax(512px, 1fr) 1312px' }}
          gap={{ base: '0', lg: '24' }}
        >
          <GridItem
            display="flex"
            justifyContent={{ base: 'start', lg: 'center' }}
            alignItems={{ base: 'start', lg: 'center' }}
            py={{ base: '16', md: '24', lg: '0' }}
          >
            <Hero />
          </GridItem>
          <GridItem
            overflow={{ base: 'auto', lg: 'visible' }}
            px={{ base: '1px', lg: '0' }}
            py={{ base: '1px', lg: '0' }}
          >
            <Box
              height={{ base: 'auto', lg: 'calc(100vh - 96px)' }}
              width="1312px"
              pb="8"
              transform={{
                base: 'none',
                lg: 'rotate(5deg) translateX(60px) translateY(35px)',
              }}
            >
              <Stack gap={{ base: '6', lg: '8' }} direction="row">
                <Stack gap={{ base: '6', lg: '8' }} maxW="sm">
                  <AuthenticationCard />
                  <NotificationCard />
                  <PricingCard />
                </Stack>
                <Stack gap={{ base: '6', lg: '8' }} maxW="md">
                  <PaymentCard />
                  <ECommerceCard />
                </Stack>
                <Stack gap={{ base: '6', lg: '8' }} maxW="sm">
                  <ShareDocumentCard />
                  <ReportIssueCard />
                  <CardWithTabs />
                </Stack>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Center>
  )
}
