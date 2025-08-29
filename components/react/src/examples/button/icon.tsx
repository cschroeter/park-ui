import { PhoneIcon, SendIcon } from 'lucide-react'
import { Wrap } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Button>
        <SendIcon />
        Send
      </Button>
      <Button variant="outline">
        Call us <PhoneIcon />
      </Button>
    </Wrap>
  )
}
