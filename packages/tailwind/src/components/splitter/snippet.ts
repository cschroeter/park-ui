import * as Ark from '@ark-ui/react/splitter'
import { createStyleContext } from '~/lib/create-style-context'
import { splitterStyles } from './recipe'
export * from '@ark-ui/react/splitter'

export type SplitterProps = React.ComponentProps<typeof Splitter>

const { withProvider, withContext } = createStyleContext(splitterStyles)

const SplitterRoot = withProvider(Ark.Splitter.Root, 'root')
export const SplitterPanel = withContext(Ark.Splitter.Panel, 'panel')
export const SplitterResizeTrigger = withContext(Ark.Splitter.ResizeTrigger, 'resizeTrigger')

export const Splitter = Object.assign(SplitterRoot, {
  Root: SplitterRoot,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
})
