import { SendIcon } from 'lucide-solid'
import { IconButton } from '@/components/ui'

export const App = () => {
  return (
    <IconButton borderRadius="full" aria-label="Send message">
      <SendIcon />
    </IconButton>
  )
}
