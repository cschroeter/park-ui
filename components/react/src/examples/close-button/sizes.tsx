import { Wrap } from 'styled-system/jsx'
import { CloseButton } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="6">
      <CloseButton size="xs" />
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
      <CloseButton size="xl" />
    </Wrap>
  )
}
