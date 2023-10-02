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
  )
}
