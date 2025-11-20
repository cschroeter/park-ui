import { SendIcon } from 'lucide-react'
import { IconButton } from '@/components/ui'

export const App = () => {
  return (
    <IconButton aria-label="Send message">
      <SendIcon />
    </IconButton>
  )
}
