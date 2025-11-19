import { EuroIcon } from 'lucide-react'
import { Group, Input, InputAddon } from '@/components/ui'

export const App = () => {
  return (
    <Group attached width="full">
      <InputAddon>
        <EuroIcon />
      </InputAddon>
      <Input placeholder="0.00" />
      <InputAddon>EUR</InputAddon>
    </Group>
  )
}
