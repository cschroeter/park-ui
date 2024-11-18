import { Box } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Collapsible } from '~/components/ui/collapsible'

export const Demo = (props: Collapsible.RootProps) => {
  return (
    <Collapsible.Root defaultOpen {...props}>
      <Collapsible.Trigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline">
            Toggle
          </Button>
        )}
      />
      <Collapsible.Content>
        <Box bg="colorPalette.default" color="colorPalette.fg" p="4" borderRadius="l3" mt="3">
          Content
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
