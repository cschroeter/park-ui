import { Splitter as ArkSplitter } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { splitter } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

export const SplitterRoot = withProvider(styled(ArkSplitter.Root), 'root')
export const SplitterPanel = withContext(styled(ArkSplitter.Panel), 'panel')
export const SplitterResizeTrigger = withContext(styled(ArkSplitter.ResizeTrigger), 'resizeTrigger')

export const Splitter = Object.assign(SplitterRoot, {
  Root: SplitterRoot,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
})

export type SplitterProps = typeof SplitterRoot
export type SplitterPanelProps = typeof SplitterPanel
export type SplitterResizeTriggerProps = typeof SplitterResizeTrigger
