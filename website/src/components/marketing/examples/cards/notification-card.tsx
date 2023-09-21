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
import { Typography } from '~/components/ui/typography'

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
            <Typography textStyle="sm" fontWeight="medium">
              Disputes
            </Typography>
            <Typography textStyle="sm" color="fg.muted">
              Receive a notification if a payment is disputed by a customer.
            </Typography>
          </Stack>
          <Switch defaultChecked>
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
          </Switch>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Stack gap="0.5">
            <Typography textStyle="sm" fontWeight="medium">
              Fraudulent payments
            </Typography>
            <Typography textStyle="sm" color="fg.muted">
              Receive a notification if Radar detects a fraudulent payment on your account.
            </Typography>
          </Stack>
          <Switch defaultChecked>
            <SwitchControl>
              <SwitchThumb />
            </SwitchControl>
          </Switch>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Stack gap="0.5">
            <Typography textStyle="sm" fontWeight="medium">
              Successful payments
            </Typography>
            <Typography textStyle="sm" color="fg.muted">
              Receive a notification for every successful payment.
            </Typography>
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
