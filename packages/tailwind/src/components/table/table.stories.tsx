import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './snippet'

export const Demo = (props) => {
  return (
    <Table {...props}>
      <TableCaption>Product Inventory</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productData.map((product, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell className="text-right">{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Totals</TableCell>
          <TableCell>87</TableCell>
          <TableCell className="text-right">$34,163.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

const productData = [
  { id: 'P001', name: 'MacBook Pro', category: 'Electronics', stock: 12, price: '$1999.00' },
  { id: 'P002', name: 'AirPods Pro', category: 'Audio', stock: 25, price: '$249.00' },
  { id: 'P003', name: 'Leather Wallet', category: 'Accessories', stock: 50, price: '$79.00' },
]
