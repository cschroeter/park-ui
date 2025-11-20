import { ScrollArea, Table } from '@/components/ui'

export const App = () => {
  return (
    <ScrollArea.Root size="sm" borderRadius="l3" borderWidth="1px" height="72">
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <Table.Root variant="surface" stickyHeader>
            <Table.Head>
              <Table.Row>
                <Table.Header>Product</Table.Header>
                <Table.Header>Category</Table.Header>
                <Table.Header textAlign="right">Price</Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {items.map((product) => (
                <Table.Row key={product.id}>
                  <Table.Cell>{product.name}</Table.Cell>
                  <Table.Cell>{product.category}</Table.Cell>
                  <Table.Cell textAlign="right">{product.price}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
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
  { id: 6, name: 'Monitor', category: 'Electronics', price: 299.99 },
  { id: 7, name: 'Blender', category: 'Home Appliances', price: 89.99 },
  { id: 8, name: 'Bookshelf', category: 'Furniture', price: 120.0 },
  { id: 9, name: 'Tablet', category: 'Electronics', price: 499.99 },
  { id: 10, name: 'Mouse', category: 'Accessories', price: 29.99 },
]
