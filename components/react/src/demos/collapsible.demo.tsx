import { Box } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import * as Collapsible from '~/components/ui/collapsible'

export const Demo = (props: Collapsible.RootProps) => {
  return (
    <Collapsible.Root defaultOpen {...props}>
      <Collapsible.Trigger asChild>
        <Button variant="outline">Toggle</Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box bg="accent.default" color="accent.fg" p="4" borderRadius="l3" mt="3">
          Content
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
