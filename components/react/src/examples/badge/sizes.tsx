import { Wrap } from 'styled-system/jsx'
import { Badge } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Badge size="sm">Badge</Badge>
      <Badge size="md">Badge</Badge>
      <Badge size="lg">Badge</Badge>
      <Badge size="xl">Badge</Badge>
    </Wrap>
  )
}
