import { SearchIcon } from 'lucide-solid'
import { Wrap } from 'styled-system/jsx'
import { IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <IconButton colorPalette="red" aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton colorPalette="green" aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton colorPalette="blue" aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton colorPalette="amber" aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Wrap>
  )
}
