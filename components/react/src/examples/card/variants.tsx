import { Box, Grid } from 'styled-system/jsx'
import { Button, Card } from '@/components/ui'

export const App = () => {
  return (
    <Grid gap="6" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))">
      <Card.Root variant="outline">
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
      <Card.Root variant="elevated">
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
      <Card.Root variant="subtle">
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Description</Card.Description>
        </Card.Header>
        <Card.Body>
          <Box bg="gray.surface.bg" minH="48" borderRadius="l2" />
        </Card.Body>
        <Card.Footer>
          <Button variant="surface" colorPalette="gray">
            Secondary
          </Button>
          <Button>Primary</Button>
        </Card.Footer>
      </Card.Root>
    </Grid>
  )
}
