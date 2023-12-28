import { SiGithub, SiGoogle } from '@icons-pack/react-simple-icons'
import { Divider, HStack, Stack } from 'styled-system/jsx'
import { Button, Card, FormLabel, Input, Text } from '~/components/ui'

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
            <FormLabel htmlFor="email-1">E-Mail</FormLabel>
            <Input id="email-1" placeholder="Your E-Mail" />
          </Stack>
          <Stack gap="1.5">
            <FormLabel htmlFor="password-1">Password</FormLabel>
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
