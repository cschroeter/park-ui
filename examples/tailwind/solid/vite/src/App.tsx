import { Index } from 'solid-js'
import { Button } from './components/ui/button'
import { RadioGroup } from './components/ui/radio-group'
import { Table } from './components/ui/table'

export const App = () => {
  return (
    <div class="flex flex-col gap-3">
      <RadioGroup.Root size="sm">
        <RadioGroup.Indicator />
        <Index each={['React', 'Solid', 'Vue']}>
          {(framework) => (
            <RadioGroup.Item value={framework()}>
              <RadioGroup.ItemControl />
              <RadioGroup.ItemText>{framework()}</RadioGroup.ItemText>
            </RadioGroup.Item>
          )}
        </Index>
      </RadioGroup.Root>
      <Button class="foo-bar">Hello from Park</Button>
      <Table.Root>
        <Table.Caption class="foo-bar">Product Inventory</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>ID</Table.Head>
            <Table.Head>Name</Table.Head>
            <Table.Head>Category</Table.Head>
            <Table.Head>Stock</Table.Head>
            <Table.Head text-align="right">Price</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {productData.map((product) => (
            <Table.Row>
              <Table.Cell>{product.id}</Table.Cell>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell>{product.stock}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>Totals</Table.Cell>
            <Table.Cell>87</Table.Cell>
            <Table.Cell>$34,163.00</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table.Root>
    </div>
  )
}

const productData = [
  { id: 'P001', name: 'MacBook Pro', category: 'Electronics', stock: 12, price: '$1999.00' },
  { id: 'P002', name: 'AirPods Pro', category: 'Audio', stock: 25, price: '$249.00' },
  { id: 'P003', name: 'Leather Wallet', category: 'Accessories', stock: 50, price: '$79.00' },
]
