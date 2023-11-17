import { Divider, HStack, Stack, styled } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export const AuthenticationCard = () => {
  return (
    <Card.Root maxW="sm">
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
              Google
            </Button>
            <Button variant="outline" width="full">
              GitHub
            </Button>
          </Stack>
          <HStack gap="2">
            <Divider />
            <styled.p color="fg.subtle" textStyle="sm" whiteSpace="nowrap">
              or sign up with
            </styled.p>
            <Divider />
          </HStack>
          <Stack gap="1.5">
            <Label for="name">E-Mail</Label>
            <Input id="name" placeholder="Your E-Mail" />
          </Stack>
          <Stack gap="1.5">
            <Label for="password">Password</Label>
            <Input id="password" type="password" placeholder="Your Password" />
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button width="full">Create Account</Button>
      </Card.Footer>
    </Card.Root>
  )
}
