import { Splitter } from '@ark-ui/solid'
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

const Root = withProvider(Splitter.Root, 'root')
const Panel = withContext(Splitter.Panel, 'panel')
const ResizeTrigger = withContext(Splitter.ResizeTrigger, 'resizeTrigger')

export { Panel, ResizeTrigger, Root }
