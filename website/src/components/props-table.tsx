import {
  Code,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  type TableProps,
} from '~/components/ui'

export const PropsTable = (props: TableProps) => {
  return (
    <Table {...props}>
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Code size="sm">size</Code>
          </TableCell>
          <TableCell>
            <Code size="sm">"sm" | "md" | "lg"</Code>
          </TableCell>
          <TableCell>
            <Code size="sm">"md"</Code>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
