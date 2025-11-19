import { SearchIcon } from 'lucide-solid'
import { IconButton, Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <InputGroup.Root>
      <Input placeholder="Type to search..." />
      <IconButton
        aria-label="Search"
        variant="outline"
        focusVisibleRing="inside"
        colorPalette="gray"
      >
        <SearchIcon />
      </IconButton>
    </InputGroup.Root>
  )
}
