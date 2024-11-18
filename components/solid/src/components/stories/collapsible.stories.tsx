import type { Meta } from 'storybook-solidjs'
import { Box } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Collapsible } from '~/components/ui/collapsible'

const meta: Meta = {
  title: 'Components/Collapsible',
}

export default meta

export const Basic = () => (
  <Collapsible.Root gap="3">
    <Collapsible.Trigger asChild={(props) => <Button variant="outline" {...props()} />}>
      Toggle
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Box width="sm" bg="colorPalette.default" color="colorPalette.fg" p="4" borderRadius="l3">
        Content
      </Box>
    </Collapsible.Content>
  </Collapsible.Root>
)
