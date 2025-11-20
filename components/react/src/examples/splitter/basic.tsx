import { Splitter } from '@/components/ui'

export const App = () => {
  return (
    <Splitter.Root panels={[{ id: 'a' }, { id: 'b' }]}>
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
  )
}
