import { Stack } from 'styled-system/jsx'
import { Table } from '@/components/ui'

export const App = () => {
  const variants = ['outline', 'plain'] as const
  return (
    <Stack gap="8">
      {variants.map((variant) => (
        <Table.Root key={variant} variant={variant} size="sm">
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
          <Table.Foot>
            <Table.Row>
              <Table.Cell colSpan={2}>Totals</Table.Cell>
              <Table.Cell textAlign="right">$2,199.96</Table.Cell>
            </Table.Row>
          </Table.Foot>
        </Table.Root>
      ))}
    </Stack>
  )
}

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
]
