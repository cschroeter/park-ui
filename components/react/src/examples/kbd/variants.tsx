import { Wrap } from 'styled-system/jsx'
import { Kbd } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Kbd variant="solid">⌘</Kbd>
      <Kbd variant="surface">⌘</Kbd>
      <Kbd variant="subtle">⌘</Kbd>
      <Kbd variant="outline">⌘</Kbd>
      <Kbd variant="plain">⌘</Kbd>
    </Wrap>
  )
}
