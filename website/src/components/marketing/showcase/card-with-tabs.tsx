import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { FormLabel } from '~/components/ui/form-label'
import { Input } from '~/components/ui/input'
import { Tabs } from '~/components/ui/tabs'

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
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" defaultValue="grizzly_codes" />
            </Stack>
            <Stack gap="1.5">
              <FormLabel htmlFor="password-2">Password</FormLabel>
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
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" />
            </Stack>
            <Stack gap="1.5">
              <FormLabel htmlFor="email">E-Mail</FormLabel>
              <Input id="email" />
            </Stack>
            <Stack gap="1.5">
              <FormLabel htmlFor="password-3">Password</FormLabel>
              <Input id="password-3" type="password" />
            </Stack>
            <Stack gap="1.5">
              <FormLabel htmlFor="confirm">Confirm Password</FormLabel>
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
