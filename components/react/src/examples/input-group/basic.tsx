import { EuroIcon } from 'lucide-react'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <InputGroup startElement={<EuroIcon />}>
      <Input placeholder="0.00" />
    </InputGroup>
  )
}
