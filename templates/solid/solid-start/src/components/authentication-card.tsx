import { SiGithub, SiGoogle } from 'solid-icons/si'
import { Divider, HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Field } from '~/components/ui/field'
import { Text } from '~/components/ui/text'

export const AuthenticationCard = () => (
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
          <Text color="fg.subtle" size="sm" whiteSpace="nowrap">
            or sign up with
          </Text>
          <Divider />
        </HStack>
        <Field.Root>
          <Field.Label>E-Mail</Field.Label>
          <Field.Input type="email" placeholder="Your E-Mail" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Field.Input type="password" placeholder="Your Password" />
        </Field.Root>
      </Stack>
    </Card.Body>
    <Card.Footer>
      <Button width="full">Create Account</Button>
    </Card.Footer>
  </Card.Root>
)
