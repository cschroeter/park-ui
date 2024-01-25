import type { Meta } from 'storybook-solidjs'
import * as Card from '~/components/ui/card'

const meta: Meta = {
  title: 'Components/Card',
}

export default meta

export const Base = () => {
  return (
    <Card.Root width="sm">
      <Card.Header>
        <Card.Title>Team Members</Card.Title>
        <Card.Description>Add new members to your organisation.</Card.Description>
      </Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card.Root>
  )
}
