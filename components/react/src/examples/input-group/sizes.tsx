import { GlobeIcon, InfoIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap="4">
      {sizes.map((size) => (
        <InputGroup.Root key={size} size={size}>
          <InputGroup.Addon>https://</InputGroup.Addon>
          <InputGroup.Control startElement={<GlobeIcon />} endElement={<InfoIcon />}>
            <Input borderRadius="0" placeholder="example.com" size={size} />
          </InputGroup.Control>
          <InputGroup.Addon>.com</InputGroup.Addon>
        </InputGroup.Root>
      ))}
    </Stack>
  )
}
