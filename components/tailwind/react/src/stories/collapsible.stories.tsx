import type { Meta } from '@storybook/react'
import { Button, Collapsible } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Collapsible',
}

export default meta

export const Basic = () => (
  <Collapsible.Root class="gap-3">
    <Collapsible.Trigger asChild>
      <Button variant="outline">Toggle</Button>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <div className="w-sm bg-accent-default text-accent-fg p-4">Content</div>
    </Collapsible.Content>
  </Collapsible.Root>
)
