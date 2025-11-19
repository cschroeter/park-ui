import { EuroIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Group, Input, InputAddon } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4">
      {sizes.map((size) => (
        <Group key={size} attached>
          <InputAddon size={size}>
            <EuroIcon />
          </InputAddon>
          <Input placeholder="0.00" size={size} />
          <InputAddon>EUR</InputAddon>
        </Group>
      ))}
    </Stack>
  )
}
