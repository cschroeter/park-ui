import type { Meta } from 'storybook-solidjs'
import { Splitter } from '~/components/ui/splitter'

const meta: Meta = {
  title: 'Components/Splitter',
}

export default meta

export const Base = () => {
  return (
    <Splitter.Root
      size={[
        { id: 'a', size: 50 },
        { id: 'b', size: 50 },
      ]}
    >
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
  )
}
