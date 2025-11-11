import { Splitter } from '@/components/ui'

export const App = () => {
  return (
    <Splitter.Root
      panels={[
        { id: 'a', minSize: 20 },
        { id: 'b', minSize: 40 },
        { id: 'c', minSize: 20 },
      ]}
      defaultSize={[20, 60, 20]}
    >
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize A and B" />
      <Splitter.Panel id="b">B</Splitter.Panel>
      <Splitter.ResizeTrigger id="b:c" aria-label="Resize B and C" />
      <Splitter.Panel id="c">C</Splitter.Panel>
    </Splitter.Root>
  )
}
