import { SearchIcon } from 'lucide-react'
import { Wrap } from 'styled-system/jsx'
import { IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <IconButton variant="solid" aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton variant="surface" aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton variant="subtle" aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton variant="outline" aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton variant="plain" aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Wrap>
  )
}
