import { Wrap } from 'styled-system/jsx'
import { Kbd } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌃</Kbd>
    </Wrap>
  )
}
