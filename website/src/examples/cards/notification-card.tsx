import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Switch, SwitchControl, SwitchThumb } from '~/components/ui/switch'
import { Text } from '~/components/ui/text'

export const NotificationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage when you'll receive notifications.</CardDescription>
      </CardHeader>
      <CardContent gap="4">
        <Stack direction="row" justify="space-between">
          <Stack gap="0.5">
            <Text textStyle="sm" fontWeight="medium">
              Disputes
            </Text>
            <Text textStyle="sm" color="fg.muted">
              Receive a notification if a payment is disputed by a customer.
            </Text>
          </Stack>
          <Switch defaultChecked>
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
          </Switch>
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
          <Switch defaultChecked>
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
          </Switch>
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
          <Switch>
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
          </Switch>
        </Stack>
      </CardContent>
      <CardFooter>
        <Button variant="outline" width="full">
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
