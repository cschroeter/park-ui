import { Wrap } from 'styled-system/jsx'
import { Kbd } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Kbd size="sm">Shift + Tab</Kbd>
      <Kbd size="md">Shift + Tab</Kbd>
      <Kbd size="lg">Shift + Tab</Kbd>
      <Kbd size="xl">Shift + Tab</Kbd>
    </Wrap>
  )
}
