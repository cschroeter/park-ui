import { EuroIcon, InfoIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  const variants = ['outline', 'subtle', 'surface', 'flushed'] as const
  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <InputGroup key={variant} startElement={<EuroIcon />} endElement={<InfoIcon />}>
          <Input placeholder="0.00" variant={variant} />
        </InputGroup>
      ))}
    </Stack>
  )
}
