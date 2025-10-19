import { Wrap } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Button loading>Click me</Button>
      <Button loading loadingText="Saving...">
        Click me
      </Button>
    </Wrap>
  )
}
