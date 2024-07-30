import { Field } from '@ark-ui/react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'

export const Demo = (props: Card.RootProps) => {
  return (
    <Card.Root width="sm" {...props}>
      <Card.Header>
        <Card.Title>Team Members</Card.Title>
        <Card.Description>Add new members to your organisation.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Field.Input asChild>
              <Input placeholder="Name" />
            </Field.Input>
          </Field.Root>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Field.Input asChild>
              <Input type="email" placeholder="Email" />
            </Field.Input>
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer gap="3">
        <Button variant="outline">Cancel</Button>
        <Button>Invite</Button>
      </Card.Footer>
    </Card.Root>
  )
}
