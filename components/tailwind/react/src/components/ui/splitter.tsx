import { Splitter as ArkSplitter } from '@ark-ui/react/splitter'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'splitter',
  slots: {
    root: 'splitter__root',
    panel: 'splitter__panel',
    resizeTrigger: 'splitter__resizeTrigger',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const Splitter = withProvider(ArkSplitter.Root, 'root')
const SplitterPanel = withContext(ArkSplitter.Panel, 'panel')
const SplitterResizeTrigger = withContext(ArkSplitter.ResizeTrigger, 'resizeTrigger')

const Root = Splitter
const Panel = SplitterPanel
const ResizeTrigger = SplitterResizeTrigger

export { Panel, ResizeTrigger, Root, Splitter, SplitterPanel, SplitterResizeTrigger }
