import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import * as Card from '~/components/ui/card'
import { FormLabel } from '~/components/ui/form-label'
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
          <Stack gap="1.5">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" placeholder="Name" />
          </Stack>
          <Stack gap="1.5">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" placeholder="Email" />
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer gap="3">
        <Button variant="outline">Cancel</Button>
        <Button>Invite</Button>
      </Card.Footer>
    </Card.Root>
  )
}
