import { Splitter as ArkSplitter } from '@ark-ui/react/splitter'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { splitter } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

const Root = withProvider(styled(ArkSplitter.Root), 'root')
const Panel = withContext(styled(ArkSplitter.Panel), 'panel')
const ResizeTrigger = withContext(styled(ArkSplitter.ResizeTrigger), 'resizeTrigger')

export { Panel, ResizeTrigger, Root }

export interface SplitterRootProps extends ComponentProps<typeof Root> {}
export interface SplitterPanelProps extends ComponentProps<typeof Panel> {}
export interface SplitterResizeTriggerProps extends ComponentProps<typeof ResizeTrigger> {}
