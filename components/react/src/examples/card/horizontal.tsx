import { Box, Wrap } from 'styled-system/jsx'
import { Badge, Button, Card, Image } from '@/components/ui'

export const App = () => {
  return (
    <Card.Root flexDirection="row" overflow="hidden">
      <Image
        maxW="52"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <Box>
        <Card.Header>
          <Card.Title>The perfect latte</Card.Title>
          <Card.Description>
            Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Wrap>
            <Badge>Hot</Badge>
            <Badge>Caffeine</Badge>
          </Wrap>
        </Card.Body>
        <Card.Footer justifyContent="start">
          <Button>Buy Latte</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}
