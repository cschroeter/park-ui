import { Stack } from 'styled-system/jsx'
import { Textarea } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap="4">
      {sizes.map((size, index) => (
        <Textarea key={size} placeholder={`size (${size})`} size={size} rows={index + 1} />
      ))}
    </Stack>
  )
}
