import { Button, Card, Image } from '@/components/ui'

export const App = () => {
  return (
    <Card.Root width={{ base: 'full', md: '50%' }}>
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Header>
        <Card.Title>Living room Sofa</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired spaces.
        </Card.Description>
      </Card.Header>
      <Card.Body />
      <Card.Footer>
        <Button variant="outline" colorPalette="gray">
          Add to cart
        </Button>
        <Button variant="solid">Buy now</Button>
      </Card.Footer>
    </Card.Root>
  )
}
