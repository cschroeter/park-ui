import { Card, Field, Input } from '@/components/ui'

export const App = () => {
  return (
    <Card.Root boxShadow="lg">
      <Card.Header gap="1">
        <Card.Title>Sign Up</Card.Title>
        <Card.Description>
          Create an account and discover the worlds' best UI component framework.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input placeholder="Enter your name" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Name</Field.Label>
        </Field.Root>
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card.Root>
  )
}
