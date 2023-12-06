import { SiGithub, SiGoogle } from '@icons-pack/react-simple-icons'
import { Divider, HStack, Stack } from 'styled-system/jsx'
import { Button, Card, Input, Label, Text } from '~/components/ui'

export const AuthenticationCard = () => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Sign Up</Card.Title>
        <Card.Description>
          Create an account and discover the worlds' best UI component framework.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Stack direction="row" gap="3">
            <Button variant="outline" width="full">
              <SiGoogle />
              Google
            </Button>
            <Button variant="outline" width="full">
              <SiGithub />
              GitHub
            </Button>
          </Stack>
          <HStack gap="2">
            <Divider />
            <Text color="fg.subtle" textStyle="sm" whiteSpace="nowrap">
              or sign up with
            </Text>
            <Divider />
          </HStack>
          <Stack gap="1.5">
            <Label htmlFor="email-1">E-Mail</Label>
            <Input id="email-1" placeholder="Your E-Mail" />
          </Stack>
          <Stack gap="1.5">
            <Label htmlFor="password-1">Password</Label>
            <Input id="password-1" type="password" placeholder="Your Password" />
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button width="full">Create Account</Button>
      </Card.Footer>
    </Card.Root>
  )
}
