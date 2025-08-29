import { Wrap } from 'styled-system/jsx'
import { CloseButton } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="6">
      <CloseButton variant="solid" />
      <CloseButton variant="outline" />
      <CloseButton variant="subtle" />
      <CloseButton variant="ghost" />
      <CloseButton variant="link" />
    </Wrap>
  )
}
