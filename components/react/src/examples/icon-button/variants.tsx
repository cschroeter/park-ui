import { SearchIcon } from 'lucide-react'
import { Wrap } from 'styled-system/jsx'
import { IconButton } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'outline', 'subtle', 'ghost', 'link'] as const

  return (
    <Wrap gap="4">
      {variants.map((variant) => (
        <IconButton key={variant} variant={variant} aria-label="Search">
          <SearchIcon />
        </IconButton>
      ))}
    </Wrap>
  )
}
