import { Stack } from 'styled-system/jsx'
import { Code } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4" alignItems="start">
      {sizes.map((size) => (
        <Code key={size} size={size}>
          console.log()
        </Code>
      ))}
    </Stack>
  )
}
