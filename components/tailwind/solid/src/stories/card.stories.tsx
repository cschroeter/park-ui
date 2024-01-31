import type { Meta } from 'storybook-solidjs'
import { Card } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Card',
}

export default meta

export const Base = () => {
  return (
    <Card.Root class="w-sm">
      <Card.Header>
        <Card.Title>Team Members</Card.Title>
        <Card.Description>Add new members to your organisation.</Card.Description>
      </Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card.Root>
  )
}
