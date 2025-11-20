import { SearchIcon } from 'lucide-solid'
import { IconButton, Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <InputGroup
      endElement={
        <IconButton variant="surface" size="xs" colorPalette="gray">
          <SearchIcon />
        </IconButton>
      }
    >
      <Input placeholder="Search" />
    </InputGroup>
  )
}
