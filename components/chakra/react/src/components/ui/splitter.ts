import { Splitter as ArkSplitter } from '@ark-ui/react/splitter'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Splitter')

const Splitter = withProvider(chakra(ArkSplitter.Root), 'root')
const SplitterPanel = withContext(chakra(ArkSplitter.Panel), 'panel')
const SplitterResizeTrigger = withContext(chakra(ArkSplitter.ResizeTrigger), 'resizeTrigger')

const Root = Splitter
const Panel = SplitterPanel
const ResizeTrigger = SplitterResizeTrigger

export { Panel, ResizeTrigger, Root, Splitter, SplitterPanel, SplitterResizeTrigger }

export interface SplitterProps extends HTMLChakraProps<typeof Splitter> {}
export interface SplitterPanelProps extends HTMLChakraProps<typeof SplitterPanel> {}
export interface SplitterResizeTriggerProps extends HTMLChakraProps<typeof SplitterResizeTrigger> {}
