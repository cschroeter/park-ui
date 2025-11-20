'use client'
import { useSplitter } from '@ark-ui/react/splitter'
import { Stack } from 'styled-system/jsx'
import { Button, Splitter } from '@/components/ui'

export const App = () => {
  const splitter = useSplitter({
    defaultSize: [15, 20],
    panels: [
      { id: 'a', collapsible: true, collapsedSize: 5, minSize: 25, maxSize: 25 },
      { id: 'b', minSize: 50 },
    ],
  })

  return (
    <Stack gap="4" alignItems="start">
      <Button
        onClick={() =>
          splitter.isPanelCollapsed('a') ? splitter.expandPanel('a') : splitter.collapsePanel('a')
        }
        size="xs"
        variant="surface"
      >
        {splitter.isPanelCollapsed('a') ? 'Expand' : 'Collapse'} Panel A
      </Button>
      <Splitter.RootProvider value={splitter}>
        <Splitter.Panel id="a">A</Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
        <Splitter.Panel id="b">B</Splitter.Panel>
      </Splitter.RootProvider>
    </Stack>
  )
}
