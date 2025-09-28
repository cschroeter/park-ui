import { Box } from 'styled-system/jsx'
import { Button, Card } from '@/components/ui'

export const App = () => {
  return (
    <Card.Root width={{ base: 'full', md: '50%' }}>
      <Card.Header>
        <Card.Title>Title</Card.Title>
        <Card.Description>Description</Card.Description>
      </Card.Header>
      <Card.Body>
        <Box bg="gray.subtle.bg" minH="48" borderRadius="l2" />
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" colorPalette="gray">
          Secondary
        </Button>
        <Button>Primary</Button>
      </Card.Footer>
    </Card.Root>
  )
}
