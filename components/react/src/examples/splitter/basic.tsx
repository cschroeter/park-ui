/** biome-ignore-all lint/correctness/useUniqueElementIds: static IDs used for demo purposes */
import { Splitter } from '@/components/ui'

export const App = () => {
  return (
    <Splitter.Root panels={[{ id: 'a' }, { id: 'b' }]}>
      <Splitter.Panel id="a">
        <div style={{ padding: '1rem' }}>Panel A</div>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
      <Splitter.Panel id="b">
        <div style={{ padding: '1rem' }}>Panel B</div>
      </Splitter.Panel>
    </Splitter.Root>
  )
}
