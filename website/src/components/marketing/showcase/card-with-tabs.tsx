import { TabContent } from '@ark-ui/react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui/tabs'

export const CardWithTabs = () => {
  return (
    <Card.Root>
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
          <Card.Header>
            <Card.Title>Welcome to Park UI</Card.Title>
            <Card.Description>Enter your credentials to login to your account.</Card.Description>
          </Card.Header>
          <Card.Body gap="4">
            <Stack gap="1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="grizzly_codes" />
            </Stack>
            <Stack gap="1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="*****" />
            </Stack>
          </Card.Body>
          <Card.Footer>
            <Button width="full">Login</Button>
          </Card.Footer>
        </TabContent>
        <TabContent value="register" lazyMount unmountOnExit>
          <Card.Header>
            <Card.Title>Create an account</Card.Title>
            <Card.Description>
              Please fill out the form below to create an account.
            </Card.Description>
          </Card.Header>
          <Card.Body gap="4">
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
          </Card.Body>
          <Card.Footer>
            <Button width="full">Create Account</Button>
          </Card.Footer>
        </TabContent>
      </Tabs>
    </Card.Root>
  )
}
