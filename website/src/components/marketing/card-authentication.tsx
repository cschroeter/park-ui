import { SiGithub, SiGoogle } from '@icons-pack/react-simple-icons'
import { Divider, HStack, Stack } from 'styled-system/jsx'
import { Button, Card, Field, Input, Text } from '@/components/ui'

export const CardAuthentication = () => {
  return (
    <Card.Root variant="elevated">
      <Card.Header gap="1">
        <Card.Title>Sign Up</Card.Title>
        <Card.Description>
          Create an account and discover the worlds' best UI component framework.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" width="full">
          <Stack direction="row" gap="3">
            <Button variant="outline" colorPalette="gray" flex="1">
              <SiGoogle />
              Google
            </Button>
            <Button variant="outline" colorPalette="gray" flex="1">
              <SiGithub />
              GitHub
            </Button>
          </Stack>
          <HStack>
            <Divider flex="1" />
            <Text color="fg.subtle" textStyle="sm" whiteSpace="nowrap">
              or sign up with
            </Text>
            <Divider flex="1" />
          </HStack>
          <Field.Root>
            <Field.Label>E-Mail</Field.Label>
            <Input type="email" placeholder="Your E-Mail" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input type="password" placeholder="Your Password" />
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button width="full">Create Account</Button>
      </Card.Footer>
    </Card.Root>
  )
}
