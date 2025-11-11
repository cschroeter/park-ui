import { ChevronDownIcon } from 'lucide-solid'
import { Button, ButtonGroup, IconButton } from '@/components/ui'

export const App = () => {
  return (
    <ButtonGroup variant="outline" attached>
      <Button>Button</Button>
      <IconButton>
        <ChevronDownIcon />
      </IconButton>
    </ButtonGroup>
  )
}
