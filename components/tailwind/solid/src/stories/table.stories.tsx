import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Table } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Table',
}

export default meta

export const Base = () => {
  return (
    <Table.Root>
      <Table.Caption>Product Inventory</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header>ID</Table.Header>
          <Table.Header>Name</Table.Header>
          <Table.Header>Stock</Table.Header>
          <Table.Header className="text-right">Price</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Index each={products}>
          {(product) => (
            <Table.Row>
              <Table.Cell className="font-medium">{product().id}</Table.Cell>
              <Table.Cell>{product().name}</Table.Cell>
              <Table.Cell>{product().stock}</Table.Cell>
              <Table.Cell className="text-right">{product().price}</Table.Cell>
            </Table.Row>
          )}
        </Index>
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
const products = [
  { id: 'P001', name: 'MacBook Pro', stock: 12, price: '$1999.00' },
  { id: 'P002', name: 'AirPods Pro', stock: 25, price: '$249.00' },
  { id: 'P003', name: 'Leather Wallet', stock: 50, price: '$79.00' },
]
