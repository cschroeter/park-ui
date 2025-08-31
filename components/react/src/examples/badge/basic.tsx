import { Wrap } from 'styled-system/jsx'
import { Badge } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Badge>Default</Badge>
      <Badge colorPalette="green">Success</Badge>
      <Badge colorPalette="red">Removed</Badge>
      <Badge colorPalette="purple">New</Badge>
    </Wrap>
  )
}
