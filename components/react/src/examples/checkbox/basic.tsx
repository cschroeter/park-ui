import { CheckIcon } from 'lucide-react'
import { Checkbox } from '@/components/ui'

export const App = () => {
  return (
    <Checkbox.Root>
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  )
}
