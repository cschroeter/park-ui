import { Stack } from 'styled-system/jsx'
import { Button, Clipboard } from '@/components/ui'

export const App = () => {
  return (
    <Clipboard.Root value="npm install park-ui">
      <Stack direction="row" gap="3">
        <Clipboard.Label>Copy installation command:</Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input />
          <Clipboard.Trigger asChild>
            <Button variant="outline" size="sm">
              <Clipboard.Indicator copied="Copied!" />
            </Button>
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Stack>
    </Clipboard.Root>
  )
}
