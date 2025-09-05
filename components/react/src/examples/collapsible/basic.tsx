import { ChevronDownIcon } from 'lucide-react'
import { Collapsible } from '@/components/ui'

export const App = () => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>
        Toggle
        <Collapsible.Indicator>
          <ChevronDownIcon />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
  )
}
