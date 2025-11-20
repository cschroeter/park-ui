import { Button, Card, Field, Input, Tabs } from '@/components/ui'

export const CardTabs = () => {
  return (
    <Card.Root variant="elevated">
      <Tabs.Root defaultValue="login" variant="line" size="sm" fitted gap="0">
        <Tabs.List mx="6" pt="4">
          <Tabs.Trigger value="login">Login</Tabs.Trigger>
          <Tabs.Trigger value="register">Register</Tabs.Trigger>
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
              <Input defaultValue="grizzly_codes" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input type="password" placeholder="*****" />
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
              <Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>E-Mail</Field.Label>
              <Input type="email" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input type="password" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Confirm Password</Field.Label>
              <Input type="password" />
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
