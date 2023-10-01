import { Stack } from 'styled-system/jsx'
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
    <Stack gap={8} direction="row" px={{ base: '4', md: '6' }}>
      <Stack gap="8" maxW="sm">
        <AuthenticationCard />
        <NotificationCard />
        <PricingCard />
      </Stack>
      <Stack gap="8" maxW="md">
        <ECommerceCard />
        <PaymentCard />
      </Stack>
      <Stack gap="8" maxW="sm">
        <ShareDocumentCard />
        <ReportIssueCard />
        <CardWithTabs />
      </Stack>
    </Stack>
  )
}
