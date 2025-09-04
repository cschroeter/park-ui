import { ScrollArea, Table } from '@/components/ui'

export const App = () => {
  return (
    <ScrollArea.Root size="sm">
      <ScrollArea.Viewport
        css={{
          '&[data-overflow-x] [data-sticky]': {
            _after: {
              content: '""',
              position: 'absolute',
              pointerEvents: 'none',
              top: '0',
              bottom: '-1px',
              width: '32px',
            },
          },
          '&[data-overflow-x] [data-sticky=end]': {
            _after: {
              insetInlineEnd: '0',
              translate: '100% 0',
              shadow: 'inset 8px 0px 8px -8px rgba(0, 0, 0, 0.16)',
            },
          },
        }}
      >
        <ScrollArea.Content>
          <Table.Root
            variant="outline"
            size="sm"
            css={{
              '& [data-sticky]': {
                position: 'sticky',
                zIndex: 1,
              },
              '& [data-sticky=end]': {
                left: '0',
              },
            }}
          >
            <Table.Head>
              <Table.Row>
                <Table.Header bg="bg.subtle" data-sticky="end">
                  Product
                </Table.Header>
                <Table.Header bg="bg.subtle" minW="xs">
                  Category
                </Table.Header>
                <Table.Header bg="bg.subtle" minW="xs" textAlign="right">
                  Price
                </Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {items.map((product) => (
                <Table.Row key={product.id}>
                  <Table.Cell data-sticky="end" whiteSpace="nowrap" bg="bg.default">
                    {product.name}
                  </Table.Cell>
                  <Table.Cell bg="bg.default">{product.category}</Table.Cell>
                  <Table.Cell bg="bg.default" textAlign="right">
                    {product.price}
                  </Table.Cell>
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
