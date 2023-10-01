import { Container, Grid, Stack } from 'styled-system/jsx'
import { AuthenticationCard } from './authentication-card'
import { CardWithTabs } from './card-with-tabs'
import { ECommerceCard } from './e-commerce-card'
import { NotificationCard } from './notification-card'
import { PaymentCard } from './payment-card'
import { PricingCard } from './pricing-card'
import { ReportIssueCard } from './report-issue-card'
import { ShareDocumentCard } from './share-document-card'

export const Cards = () => {
  return (
    <Container>
      <Grid gap={8} columns={{ base: 1, md: 2, lg: 1, xl: 2, '2xl': 3 }}>
        <Stack gap="8">
          <AuthenticationCard />
          <NotificationCard />
          <PricingCard />
        </Stack>
        <Stack gap="8">
          <ECommerceCard />
          <PaymentCard />
        </Stack>
        <Stack gap="8">
          <ShareDocumentCard />
          <ReportIssueCard />
          <CardWithTabs />
        </Stack>
      </Grid>
    </Container>
  )
}
