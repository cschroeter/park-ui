import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Field } from '~/components/ui/field'
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
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Field.Input defaultValue="grizzly_codes" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Field.Input type="password" placeholder="*****" />
            </Field.Root>
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
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Field.Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>E-Mail</Field.Label>
              <Field.Input type="email" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Field.Input type="password" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Confirm Password</Field.Label>
              <Field.Input type="password" />
            </Field.Root>
          </Card.Body>
          <Card.Footer>
            <Button width="full">Create Account</Button>
          </Card.Footer>
        </Tabs.Content>
      </Tabs.Root>
    </Card.Root>
  )
}
