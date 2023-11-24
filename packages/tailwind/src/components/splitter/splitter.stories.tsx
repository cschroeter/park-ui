import { Splitter, type SplitterProps } from './snippet'

export const Demo = (props: SplitterProps) => {
  return (
    <Splitter
      size={[
        { id: 'a', size: 50 },
        { id: 'b', size: 50 },
      ]}
      orientation="horizontal"
      {...props}
    >
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter>
  )
}
