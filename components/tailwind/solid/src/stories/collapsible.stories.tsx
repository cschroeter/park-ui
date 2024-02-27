import type { Meta } from 'storybook-solidjs'
import { Button, Collapsible } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Collapsible',
}

export default meta

export const Basic = () => (
  <Collapsible.Root class="gap-3">
    <Collapsible.Trigger as={Button} variant="outline">
      Toggle
    </Collapsible.Trigger>
    <Collapsible.Content>
      <div class="w-sm bg-accent-default text-accent-fg p-4">Content</div>
    </Collapsible.Content>
  </Collapsible.Root>
)
