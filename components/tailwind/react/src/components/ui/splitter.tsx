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

const Root = withProvider(ArkSplitter.Root, 'root')
const Panel = withContext(ArkSplitter.Panel, 'panel')
const ResizeTrigger = withContext(ArkSplitter.ResizeTrigger, 'resizeTrigger')

export { Panel, ResizeTrigger, Root }
