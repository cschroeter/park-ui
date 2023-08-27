import { Box, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Switch, SwitchControl, SwitchInput, SwitchThumb } from '~/components/ui/switch'
import { Typography } from '~/components/ui/typography'

export const NotificationCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage when you'll receive notifications.</CardDescription>
      </CardHeader>
      <CardContent gap="3">
        <Stack direction="row" gap="2" justify="space-between">
          <Box>
            <Typography textStyle="sm" fontWeight="semibold">
              Disputes
            </Typography>
            <Typography textStyle="sm" color="fg.muted">
              Receive a notification if a payment is disputed by a customer.
            </Typography>
          </Box>
          <Switch defaultChecked>
            <SwitchControl>
              <SwitchInput />
              <SwitchThumb />
            </SwitchControl>
          </Switch>
        </Stack>
        <Stack direction="row" gap="2" justify="space-between">
          <Box>
            <Typography textStyle="sm" fontWeight="semibold">
              Fraudulent payments
            </Typography>
            <Typography textStyle="sm" color="fg.muted">
              Receive a notification if Radar detects a fraudulent payment on your account.
            </Typography>
          </Box>
          <Switch>
            <SwitchControl>
              <SwitchInput />
              <SwitchThumb />
            </SwitchControl>
          </Switch>
        </Stack>
        <Stack direction="row" gap="2" justify="space-between">
          <Box>
            <Typography textStyle="sm" fontWeight="semibold">
              Successful payments
            </Typography>
            <Typography textStyle="sm" color="fg.muted">
              Receive a notification for every successful payment.
            </Typography>
          </Box>
          <Switch>
            <SwitchControl>
              <SwitchInput />
              <SwitchThumb />
            </SwitchControl>
          </Switch>
        </Stack>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" width="full">
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
