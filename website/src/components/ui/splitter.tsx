import { Splitter as ArkSplitter } from '@ark-ui/react/splitter'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { splitter } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

const Splitter = withProvider(styled(ArkSplitter.Root), 'root')
const SplitterPanel = withContext(styled(ArkSplitter.Panel), 'panel')
const SplitterResizeTrigger = withContext(styled(ArkSplitter.ResizeTrigger), 'resizeTrigger')

const Root = Splitter
const Panel = SplitterPanel
const ResizeTrigger = SplitterResizeTrigger

export { Panel, ResizeTrigger, Root, Splitter, SplitterPanel, SplitterResizeTrigger }

export interface SplitterProps extends HTMLStyledProps<typeof Splitter> {}
export interface SplitterPanelProps extends HTMLStyledProps<typeof SplitterPanel> {}
export interface SplitterResizeTriggerProps extends HTMLStyledProps<typeof SplitterResizeTrigger> {}
