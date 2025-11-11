import { Splitter } from '@/components/ui'

export const App = () => {
  return (
    <Splitter.Root
      defaultSize={[15, 20]}
      panels={[
        { id: 'a', collapsible: true, collapsedSize: 5, minSize: 25, maxSize: 25 },
        { id: 'b', minSize: 50 },
      ]}
    >
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
  )
}
