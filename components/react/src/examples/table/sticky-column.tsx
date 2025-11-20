import { ScrollArea, Table } from '@/components/ui'

export const App = () => {
  return (
    <ScrollArea.Root size="sm" borderRadius="l3" borderWidth="1px" scrollbar="visible">
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <Table.Root variant="surface" stickyHeader>
            <Table.Head>
              <Table.Row>
                <Table.Header minW="40" data-pinned="left" left="0">
                  Product
                </Table.Header>
                <Table.Header minW="xs">Category</Table.Header>
                <Table.Header minW="xs">Price</Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {items.map((product) => (
                <Table.Row key={product.id}>
                  <Table.Cell data-pinned="left" left="0">
                    {product.name}
                  </Table.Cell>
                  <Table.Cell>{product.category}</Table.Cell>
                  <Table.Cell>{product.price}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  )
}

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
]
