import { PhoneIcon } from 'lucide-solid'
import { Wrap } from 'styled-system/jsx'
import { IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <IconButton size="xs" aria-label="Call us">
        <PhoneIcon />
      </IconButton>
      <IconButton size="sm" aria-label="Call us">
        <PhoneIcon />
      </IconButton>
      <IconButton size="md" aria-label="Call us">
        <PhoneIcon />
      </IconButton>
      <IconButton size="lg" aria-label="Call us">
        <PhoneIcon />
      </IconButton>
      <IconButton size="xl" aria-label="Call us">
        <PhoneIcon />
      </IconButton>
      <IconButton size="2xl" aria-label="Call us">
        <PhoneIcon />
      </IconButton>
    </Wrap>
  )
}
