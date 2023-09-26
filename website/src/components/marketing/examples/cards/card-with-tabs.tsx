import { TabContent } from '@ark-ui/react'
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
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui/tabs'

export const CardWithTabs = () => {
  return (
    <Card>
      <Tabs defaultValue="login" size="sm">
        <TabList pt="4" mx="6">
          <TabTrigger value="login" flex="1">
            Login
          </TabTrigger>
          <TabTrigger value="register" flex="1">
            Register
          </TabTrigger>
          <TabIndicator />
        </TabList>
        <TabContent value="login" lazyMount unmountOnExit>
          <CardHeader>
            <CardTitle>Welcome to Park UI</CardTitle>
            <CardDescription>Enter your credentials to login to your account.</CardDescription>
          </CardHeader>
          <CardContent gap="4">
            <Stack gap="1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="grizzly_codes" />
            </Stack>
            <Stack gap="1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="*****" />
            </Stack>
          </CardContent>
          <CardFooter>
            <Button width="full">Login</Button>
          </CardFooter>
        </TabContent>
        <TabContent value="register" lazyMount unmountOnExit>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Please fill out the form below to create an account.</CardDescription>
          </CardHeader>
          <CardContent gap="4">
            <Stack gap="1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" />
            </Stack>
            <Stack gap="1.5">
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" />
            </Stack>
            <Stack gap="1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </Stack>
            <Stack gap="1.5">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input id="confirm" type="password" />
            </Stack>
          </CardContent>
          <CardFooter>
            <Button width="full">Create Account</Button>
          </CardFooter>
        </TabContent>
      </Tabs>
    </Card>
  )
}
