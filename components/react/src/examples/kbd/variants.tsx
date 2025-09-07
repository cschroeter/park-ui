import { Wrap } from 'styled-system/jsx'
import { Kbd } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Kbd variant="raised">Shift + Tab</Kbd>
      <Kbd variant="outline">Shift + Tab</Kbd>
      <Kbd variant="subtle">Shift + Tab</Kbd>
      <Kbd variant="plain">Shift + Tab</Kbd>
    </Wrap>
  )
}
