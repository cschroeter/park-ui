import { SearchIcon } from 'lucide-react'
import { Wrap } from 'styled-system/jsx'
import { IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <IconButton colorPalette="red">
        <SearchIcon />
      </IconButton>
      <IconButton colorPalette="green">
        <SearchIcon />
      </IconButton>
      <IconButton colorPalette="blue">
        <SearchIcon />
      </IconButton>
      <IconButton colorPalette="amber">
        <SearchIcon />
      </IconButton>
    </Wrap>
  )
}
