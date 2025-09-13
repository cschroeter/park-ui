import { Button, Card, Field, Input } from '@/components/ui'

export const App = () => {
  return (
    <Card.Root maxW="sm" mx="auto">
      <Card.Header>
        <Card.Title>Team Mebers</Card.Title>
        <Card.Description>Add new members to your organisation.</Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input placeholder="Name" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input placeholder="Email" />
        </Field.Root>
      </Card.Body>
      <Card.Footer gap="3">
        <Button variant="outline" colorPalette="gray">
          Cancel
        </Button>
        <Button>Invite</Button>
      </Card.Footer>
    </Card.Root>
  )
}
