import { Splitter as ArkSplitter } from '@ark-ui/react'
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

export const SplitterRoot = withProvider(ArkSplitter.Root, 'root')
export const SplitterPanel = withContext(ArkSplitter.Panel, 'panel')
export const SplitterResizeTrigger = withContext(ArkSplitter.ResizeTrigger, 'resizeTrigger')

export const Splitter = Object.assign(SplitterRoot, {
  Root: SplitterRoot,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
})
