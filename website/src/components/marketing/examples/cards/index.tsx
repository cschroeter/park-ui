import { Grid, Stack } from 'styled-system/jsx'
import { AuthenticationCard } from './authentication-card'
import { CardWithTabs } from './card-with-tabs'
import { NotificationCard } from './notification-card'
import { PaymentCard } from './payment-card'
import { ReportIssueCard } from './report-issue-card'

export const Cards = () => {
  return (
    <Grid columns={{ base: 1, md: 2, xl: 3 }} gap={8}>
      <Stack gap="8">
        <AuthenticationCard />
        <PaymentCard />
      </Stack>
      <Stack gap="8">
        <ReportIssueCard />
        <NotificationCard />
      </Stack>
      <Stack gap="8">
        <CardWithTabs />
      </Stack>
    </Grid>
  )
}
