import { Stack } from 'styled-system/jsx'
import { Input } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4">
      {sizes.map((size) => (
        <Input key={size} placeholder={size} size={size} />
      ))}
    </Stack>
  )
}
