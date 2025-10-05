import { Stack } from 'styled-system/jsx'
import { Button, Card, Text } from '@/components/ui'
import { Switch } from '~/components/ui/switch'

export const CardNotification = () => {
  return (
    <Card.Root variant="elevated">
      <Card.Header>
        <Card.Title>Notifications</Card.Title>
        <Card.Description>Manage when you'll receive notifications.</Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <Stack direction="row" justify="space-between">
          <Stack gap="0.5">
            <Text textStyle="sm" fontWeight="medium">
              Disputes
            </Text>
            <Text textStyle="sm" color="fg.muted">
              Receive a notification if a payment is disputed by a customer.
            </Text>
          </Stack>
          <Switch defaultChecked />
        </Stack>
        <Stack direction="row" justify="space-between">
          <Stack gap="0.5">
            <Text textStyle="sm" fontWeight="medium">
              Fraudulent payments
            </Text>
            <Text textStyle="sm" color="fg.muted">
              Receive a notification if Radar detects a fraudulent payment on your account.
            </Text>
          </Stack>
          <Switch defaultChecked />
        </Stack>
        <Stack direction="row" justify="space-between">
          <Stack gap="0.5">
            <Text textStyle="sm" fontWeight="medium">
              Successful payments
            </Text>
            <Text textStyle="sm" color="fg.muted">
              Receive a notification for every successful payment.
            </Text>
          </Stack>
          <Switch />
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" colorPalette="gray" width="full">
          Save Preferences
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}
