import { GlobeIcon, InfoIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  const variants = ['outline', 'subtle', 'surface'] as const

  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <InputGroup.Root key={variant} variant={variant}>
          <InputGroup.Addon>https://</InputGroup.Addon>
          <InputGroup.Control startElement={<GlobeIcon />} endElement={<InfoIcon />}>
            <Input borderRadius="0" placeholder="example.com" variant={variant} />
          </InputGroup.Control>
          <InputGroup.Addon>.com</InputGroup.Addon>
        </InputGroup.Root>
      ))}
    </Stack>
  )
}
