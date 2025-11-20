import { Table } from '@/components/ui'

export const App = () => {
  return (
    <Table.Root striped>
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
  )
}

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
]
