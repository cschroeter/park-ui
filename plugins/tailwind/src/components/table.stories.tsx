import { Table } from '~/components/ui/table'

export const Demo = () => {
  return (
    <Table.Root>
      <Table.Caption>Product Inventory</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>ID</Table.Head>
          <Table.Head>Name</Table.Head>
          <Table.Head>Stock</Table.Head>
          <Table.Head className="text-right">Price</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {productData.map((product, index) => (
          <Table.Row key={index}>
            <Table.Cell className="font-medium">{product.id}</Table.Cell>
            <Table.Cell>{product.name}</Table.Cell>
            <Table.Cell>{product.stock}</Table.Cell>
            <Table.Cell className="text-right">{product.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={2}>Totals</Table.Cell>
          <Table.Cell>87</Table.Cell>
          <Table.Cell className="text-right">$34,163.00</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
  )
}

const productData = [
  { id: 'P001', name: 'MacBook Pro', stock: 12, price: '$1999.00' },
  { id: 'P002', name: 'AirPods Pro', stock: 25, price: '$249.00' },
  { id: 'P003', name: 'Leather Wallet', stock: 50, price: '$79.00' },
]
