import { PlusIcon } from 'lucide-solid'
import { Checkbox } from '@/components/ui'

export const App = () => {
  return (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator>
          <PlusIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Label</Checkbox.Label>
    </Checkbox.Root>
  )
}
