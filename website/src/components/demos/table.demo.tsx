import { Table, type TableProps } from '~/components/ui/table'

export const Demo = (props: TableProps) => {
  return (
    <Table.Root {...props}>
      <Table.Caption>Product Inventory</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>ID</Table.Head>
          <Table.Head>Name</Table.Head>
          <Table.Head>Category</Table.Head>
          <Table.Head>Stock</Table.Head>
          <Table.Head textAlign="right">Price</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {productData.map((product, index) => (
          <Table.Row key={index}>
            <Table.Cell fontWeight="medium">{product.id}</Table.Cell>
            <Table.Cell>{product.name}</Table.Cell>
            <Table.Cell>{product.category}</Table.Cell>
            <Table.Cell>{product.stock}</Table.Cell>
            <Table.Cell textAlign="right">{product.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Totals</Table.Cell>
          <Table.Cell>87</Table.Cell>
          <Table.Cell textAlign="right">$34,163.00</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
  )
}

const productData = [
  { id: 'P001', name: 'MacBook Pro', category: 'Electronics', stock: 12, price: '$1999.00' },
  { id: 'P002', name: 'AirPods Pro', category: 'Audio', stock: 25, price: '$249.00' },
  { id: 'P003', name: 'Leather Wallet', category: 'Accessories', stock: 50, price: '$79.00' },
]
