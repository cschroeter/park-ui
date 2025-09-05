import { Stack } from 'styled-system/jsx'
import { Kbd } from '@/components/ui'

export const App = () => {
  return (
    <Stack direction="row" gap="2" align="center">
      Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy
    </Stack>
  )
}
