import { Stack } from 'styled-system/jsx'
import { Button, Card, Input, Label, Tabs } from '~/components/ui'

export const CardWithTabs = () => {
  return (
    <Card.Root>
      <Tabs.Root defaultValue="login" size="sm">
        <Tabs.List pt="4" mx="6">
          <Tabs.Trigger value="login" flex="1">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger value="register" flex="1">
            Register
          </Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="login">
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
              <Label htmlFor="password-2">Password</Label>
              <Input id="password-2" type="password" placeholder="*****" />
            </Stack>
          </Card.Body>
          <Card.Footer>
            <Button width="full">Login</Button>
          </Card.Footer>
        </Tabs.Content>
        <Tabs.Content value="register">
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
              <Label htmlFor="password-3">Password</Label>
              <Input id="password-3" type="password" />
            </Stack>
            <Stack gap="1.5">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input id="confirm" type="password" />
            </Stack>
          </Card.Body>
          <Card.Footer>
            <Button width="full">Create Account</Button>
          </Card.Footer>
        </Tabs.Content>
      </Tabs.Root>
    </Card.Root>
  )
}
