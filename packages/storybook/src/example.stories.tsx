import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import {
  AuthenticationCard,
  CardWithTabs,
  ECommerceCard,
  NotificationCard,
  PaymentCard,
  PricingCard,
  ReportIssueCard,
  ShareDocumentCard,
} from './demos'

const meta: Meta = {
  title: 'Examples/Showcase',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Showcase = () => {
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
